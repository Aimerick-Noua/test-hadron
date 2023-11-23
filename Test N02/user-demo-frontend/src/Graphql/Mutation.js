import {gql} from "@apollo/client"

export const ADD_USER_MUTATION = gql`
mutation addUser($first_name:Stringe, $last_name:String, $email:String, $birth_date:String, $gender:String ){
    addUser(User:{ first_name:$first_name, last_name:$last_name, email:$email, birth_date:$birth_date, gender:$gender }) {
          first_name,
          last_name,
          email,
          birth_date,
          gender,
        };
    };
`