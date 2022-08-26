import React from "react"
import Header from "./components/Header"
import Users from "./components/Users"
import AddUser from "./components/AddUser"

class App extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            users : [
                {
                    id: 1,
                    firstname: 'Alex',
                    lastname: 'Kasiakov',
                    bio: 'sd,kjfhsdkjh ksjfnksh bh,jsg gnkj',
                    age: 27,
                    isHappy : true
        
                },
                {
                    id: 2,
                    firstname: 'Nubik',
                    lastname: 'Pupkin',
                    bio: 'sd,kjfhsdkjh ksjfnksh bh,jsg gnkj',
                    age: 31,
                    isHappy : false
                },
                {
                    id: 3,
                    firstname: 'Kate',
                    lastname: 'midlton',
                    bio: 'sd,kjfhsdkjh ksjfnksh bh,jsg gnkj',
                    age: 21,
                    isHappy : false
                }
            ]
        }
        this.addUser = this.addUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
      }  

  render(){
    return(<div>
      <Header title="Список пользователей" />    
      <main>
        <Users users={this.state.users} onDelete={this.deleteUser}/>
      </main>
      <aside>
            <AddUser onAdd={this.addUser} />
      </aside> 
    </div>)
  }

  deleteUser(id){
    this.setState({
        // встановлюємо для нашого списку нове значення
        users: this.state.users.filter((el) => el.id !== id)
    })
  }

  addUser(user){
    const id = this.state.users.length + 1
    this.setState({ users : [...this.state.users, {id, ...user }] })
  }
  
}
//із цього файлу я його експортую
export default App
