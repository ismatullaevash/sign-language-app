#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os
import string
from PIL import Image, ImageOps

import numpy as np
from numpy.random import seed
import pandas as pd
import tensorflow as tf
from tensorflow.keras import layers, models
import matplotlib.pyplot as plt

seed(1)
tf.random.set_seed(2)

# image data preprocessing
class_names = list(string.ascii_uppercase)

def preprocessor(data_path):
    data = pd.read_csv(data_path)
    labels = data.iloc[:, 0].values.reshape(-1, 1)
    images = data.iloc[:, 1:].values.astype(np.uint8).reshape(-1, 28, 28, 1)
    return images, labels

train_images, train_labels = preprocessor("samples/sign_mnist_train/sign_mnist_train.csv")
test_images, test_labels = preprocessor("samples/sign_mnist_test/sign_mnist_test.csv")

# get ASL data
train_dir = "samples/asl_alphabet_train_C"

batch_size = 32
img_height = 28
img_width = 28

def get_asl(batch_size, img_height, img_width, train_dir):

    train_ds = tf.keras.preprocessing.image_dataset_from_directory(
        train_dir,
        color_mode='grayscale',
        seed=123,
        validation_split=0.2,
        subset="training",
        image_size=(img_height, img_width),
        batch_size=batch_size)

    val_ds = tf.keras.preprocessing.image_dataset_from_directory(
        train_dir,
        color_mode='grayscale',
        seed=123,
        validation_split=0.2,
        subset="validation",
        image_size=(img_height, img_width),
        batch_size=batch_size)

    class_names = train_ds.class_names
    sign_class_names = list(string.ascii_uppercase)

    i = 0
    for b in list(train_ds):
        X, y = b
        y_p = np.array([sign_class_names.index(l) for l in [class_names[j] for j in y]])
        if i == 0:
            asl_train_x = X
            asl_train_y = y_p.reshape(-1, 1)
        else:
            asl_train_x = np.concatenate([asl_train_x, X], axis=0)
            asl_train_y = np.concatenate([asl_train_y, y_p.reshape(-1,1)], axis=0)
        i += 1

    i = 0
    for b in list(val_ds):
        X, y = b
        y_p = np.array([sign_class_names.index(l) for l in [class_names[j] for j in y]])
        if i == 0:
            asl_test_x = X
            asl_test_y = y_p.reshape(-1, 1)
        else:
            asl_test_x = np.concatenate([asl_test_x, X], axis=0)
            asl_test_y = np.concatenate([asl_test_y, y_p.reshape(-1, 1)], axis=0)
        i += 1

    return asl_train_x, asl_train_y, asl_test_x, asl_test_y

asl_train_x, asl_train_y, asl_test_x, asl_test_y = get_asl(batch_size, img_height, img_width, train_dir)

train_images = np.concatenate([train_images, asl_train_x], axis=0)
train_labels = np.concatenate([train_labels, asl_train_y], axis=0)

test_images = np.concatenate([test_images, asl_test_x], axis=0)
test_labels = np.concatenate([test_labels, asl_test_y], axis=0)

# create the convolutional base
model = models.Sequential()
model.add(layers.Conv2D(28, (3, 3), activation='relu', input_shape=(28, 28, 1)))
model.add(layers.MaxPooling2D((2, 2)))
model.add(layers.Conv2D(64, (3, 3), activation='relu'))
model.add(layers.MaxPooling2D((2, 2)))
model.add(layers.Conv2D(64, (3, 3), activation='relu'))

model.summary()

# Add Dense layers on top
model.add(layers.Flatten())
model.add(layers.Dense(64, activation='relu'))
model.add(layers.Dense(26))

model.summary()

# Compile and train the model
model.compile(optimizer='adam',
              loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
              metrics=['accuracy'])

history = model.fit(train_images, train_labels, epochs=10,
                    validation_data=(test_images, test_labels))

# Evaluate the model
plt.plot(history.history['accuracy'], label='accuracy')
plt.plot(history.history['val_accuracy'], label='val_accuracy')
plt.xlabel('Epoch')
plt.ylabel('Accuracy')
plt.ylim([0.5, 1])
plt.legend(loc='lower right')
plt.show()

test_loss, test_acc = model.evaluate(test_images, test_labels, verbose=2)
print("test_loss: {}   test_acc: {}".format(test_loss, test_acc))  # 0.9013

# Save the model
model_dir = 'tf_model'
export_path = os.path.join(model_dir)

model.save(export_path, save_format="tf")

# Save the class names
class_names = list(string.ascii_uppercase)
labels = open(os.path.join(model_dir, "labels.txt"), "w+")
i = 0
for L in class_names:
    labels.writelines(" ".join([str(i), L]) + "\n")
    i += 1
