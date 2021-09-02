import React, { useContext } from 'react';
import { UserContext } from "../context"

function AllData(props){
  const ctx = useContext(UserContext);

  const UsersInfoCard = function (props) {
    return (
        <div className="card" style={{width:"42rem"}}>
            <div className="card-body">
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{props.name}</td>
                    <td>{props.email}</td>
                    <td>{props.password}</td>
                    </tr>
                </tbody>
                </table>
            </div>
      </div>
    )
  }

const UsersInfo = function (props) {
  return (
      props.users.map((user) => 
          <UsersInfoCard
            name={user.name}
            email={user.email}
            password={user.password}
          //   balance={user.balance}
          />  
      )
  )
}

  
  return (
    <UsersInfo
      users={ctx.users}
    />
  )

}

export default AllData;
