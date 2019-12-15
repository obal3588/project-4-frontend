
export const RoleCheck=function(user){

   const obj={
        "name":user.data.user.name,
        "role":user.data.user.role,
        "token":user.data.user.token
    }
    return obj
}


/************************* */

export const ispatient=function(user){
  const  temp =user.data.user.role 
    if (temp==="Patient")
        
        return true

    else 
    return false
    
}

/********************** */

export const patient =function(user){

    // if (user.data.user.role !=="Patient"){
    //     console.log("it is not a patient");
    //     return false
    // }
   const obj={
        "name":user.data.user.name,
        "_id":user.data.user._id,
        "healthConditions":user.data.user.patient.healthConditions,
        "token":user.data.user.token,
        "active":user.data.user.active,
        "age":user.data.user.age,
        "phone":user.data.user.phone,
        "role":user.data.user.role
    }
    return obj
}

/*************************** */

export  const assistant =function(user){

    if (user.data.user.role !="patient"){
        console.log("it is not a patient");
        return false
    }
  const  obj={
        "name":user.data.user.name,
        "_id":user.data.user._id,
        "carDescription":user.data.user.assistant.carDescription,
        "availability":user.data.user.assistant.availability,
        "token":user.data.user.token,
        "active":user.data.user.active,
        "age":user.data.user.age,
        "phone":user.data.user.phone,
        "role":user.data.user.role

    }
    return obj
}

