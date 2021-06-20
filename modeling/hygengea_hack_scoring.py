#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import string
from PIL import Image, ImageOps

import numpy as np
import tensorflow as tf


# load trained model
trained_model = tf.keras.models.load_model('tf_model/')

# label definition
sign_class_names = list(string.ascii_uppercase)

# Make predictions

probability_model = tf.keras.Sequential([trained_model, tf.keras.layers.Softmax()])
def tf_score(probability_model, img_loc, actual):
    img = Image.open(img_loc).resize((28, 28))
    gray_image = ImageOps.grayscale(img)
    img_array = np.asarray(gray_image).reshape(1, 28, 28, 1)
    predictions = probability_model.predict(img_array)

    print(("Sign " + actual + " is predicted as: {}").format(sign_class_names[np.argmax(predictions)]))

    return predictions


A = tf_score(probability_model, "samples/test_cases/A.png", "A")
B = tf_score(probability_model, "samples/test_cases/B.png", "B")
C = tf_score(probability_model, "samples/test_cases/C.png", "C")
C2 = tf_score(probability_model, "samples/test_cases/C2.png", "C")
L = tf_score(probability_model, "samples/test_cases/L.png", "L")
W = tf_score(probability_model, "samples/test_cases/W.png", "W")
Y = tf_score(probability_model, "samples/test_cases/Y.png", "Y")