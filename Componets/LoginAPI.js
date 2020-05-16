import React from 'react';
import {View,Text, StyleSheet, TextInput, TouchableHighlight} from 'react-native';
import Axios from 'axios';

let APIKit = Axios.create({
    baseURL: 'localhost27017/api/admin',
    timeout: 10000,
});

export const setClientToken = token => {
    APIKit.interceptors.request.use(function(config){
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    });
};

export default APIKit;