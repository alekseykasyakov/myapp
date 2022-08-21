import React from "react"


class Users extends React.Component {
    users = [
        {
            id: 1,
            firstname: 'Alex',
            lastname: 'Kasiakov',
            bio: 'sd,kjfhsdkjh ksjfnksh bh,jsg gnkj',
            age: 27,
            isHappy : true,

        },
        {
            id: 2,
            firstname: 'Nubik',
            lastname: 'Pupkin',
            bio: 'sd,kjfhsdkjh ksjfnksh bh,jsg gnkj',
            age: 31,
            isHappy : false,
        }
    ]
  render(){
    if(this.users.length > 0)
        return (<div>
            {this.users.map((el) => (<div className="user" key={el.id}>
                <h3>{el.firstname} {el.lastname}</h3>
                <p>{el.bio}</p>
                <b>{el.isHappy ?"happy =)":"not happy =("}</b>
            </div>))}
        </div>        
        )
    else 
        return  (<div classNmae="user">
            <h3>Users not found</h3>
        </div>)
  }  
}

export default Users