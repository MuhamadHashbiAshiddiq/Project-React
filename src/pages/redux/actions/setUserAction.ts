import React, { Component } from 'react'
import { User } from '../../../models/user'

export const setUser = (user: User) => {
    return {
      type: 'SET_USER',
      user
    }
  }
