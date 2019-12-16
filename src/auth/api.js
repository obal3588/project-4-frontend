import apiUrl from '../apiConfig'
import axios from 'axios'



export const newRequest = req => {
  console.log(req)
  return axios({
    url: apiUrl + '/api/requests',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${req.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    },
    data: {
      request: {
        assistantId: req.assistantId,
        date:req.date,
        carDescription:req.carDescription,
        specialNeeds:req.specialNeeds,
        package:req.package,
        trip: {
          start:req.pickup,
          destination: req.dropoff
        },
     
      }
  }})
}

export const allAvailableAssistant = req => {
console.log(req,"req")
  return axios({
    url: apiUrl + "/api/requests/availabledrivers",
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${req.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    },}
)
}
















export const signUp = credentials => {
  return axios({
    method: 'POST',
    url: apiUrl + '/sign-up',
    data: {
      credentials: {
        email: credentials.email,
        password: credentials.password,
        password_confirmation: credentials.passwordConfirmation,
        phone: credentials.phone ,
        role: credentials.type ,
        age :credentials.age,
        name:credentials.name


      }
    }
  })
}

export const signIn = credentials => {
  return axios({
    url: apiUrl + '/sign-in',
    method: 'POST',
    data: {
      credentials: {
        email: credentials.email,
        password: credentials.password
      }
    }
  })
}

export const signOut = user => {
  return axios({
    url: apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    }
  })
}

export const changePassword = (passwords, user) => {
  return axios({
    url: apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    },
    data: {
      passwords: {
        old: passwords.oldPassword,
        new: passwords.newPassword
      }
    }
  })
}
