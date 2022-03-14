import tensorflow as tf
import numpy as np
from numpy.random import multivariate_normal,permutation
import matplotlib.pyplot as plt
import pandas as pd
from pandas import DataFrame,Series
import os

os.environ['TF_CPP_MIN_LOG_LEVEL']='2'
np.random.seed(20212021)

n0, mu0, variance0 = 20, [10, 11], 20
data0 = multivariate_normal(mu0, np.eye(2)*variance0, n0)
df0 = DataFrame(data0, columns=['x1', 'x2'])
df0['t'] = 0

n1, mu1, variance1 = 15, [18, 20], 22
data1 = multivariate_normal(mu1,np.eye(2)*variance1, n1)
df1 = DataFrame(data1, columns=['x1', 'x2'])
df1['t'] = 1

df = pd.concat([df0, df1], ignore_index=True)
train_set = df.reindex(permutation(df.index)).reset_index(drop=True)
train_x = train_set[['x1', 'x2']].values.astype(np.float32)
train_t = train_set['t'].values.reshape([len(train_set), 1]).astype(np.float32)
dataset = tf.data.Dataset.from_tensor_slices((train_x, train_t)).batch(len(train_x))
w = tf.Variable(tf.zeros([2, 1]), name='weight')
b = tf.Variable(tf.zeros([1]), name='bias')

def logistic_regression(X):
    sigmoid = tf.divide(1.,1.+tf.exp(tf.matmul(X,w)+b))
    return sigmoid

def loss_fn(sigmoid,t):
    cost=-tf.reduce_mean(t*tf.math.log(sigmoid))+(1-t)*tf.math.log(sigmoid)+(1-t)*tf.math.log(1-sigmoid)
    return cost

def grad(X,t):
    with tf.GradientTape() as tape:
        loss_value = loss_fn(logistic_regression(X),t)
        return tape.gradient(loss_value,[w,b])

optimizer = tf.keras.optimizers.Adam()
EPOCHS=10000
step=0
for step in range(EPOCHS):
    step+=1
    for features,lables in iter(dataset):
        grads=grad(features,lables)
        optimizer.apply_gradients(grads_and_vars=zip(grads,[w,b]))
        if step%1000==0:
            print("Iter: {}, Loss: {:.4f}".format(step,loss_fn(logistic_regression(features),lables)))
w.numpy()
b.numpy()
train_set0=train_set[train_set['t']==0]
train_set1=train_set[train_set['t']==1]
fig=plt.figure(figsize=(6,6))
subplot=fig.add_subplot(1,1,1)
subplot.set_ylim([0,30])
subplot.set_ylim([0,30])
subplot.scatter(train_set1.x1,train_set1.x2,marker='x')
subplot.scatter(train_set0.x1,train_set0.x2,marker='o')
linex=np.linspace(0,30,10)
liney=-(w1_val*linex/w2_val+w0_val/w2_val)
subplot.plot(linex,liney)

field=[[1/(1+np.exp(-(b+w[0]*x1+w[1]*x2)))
        for x1 in np.linspace(0,30,100)]
       for x2 in np.linspace(0,30,100)]
subplot.imshow(field,origin='lower',extent=(0,30,0,30),cmap=plt.cm.gray_,alpha=0.5)