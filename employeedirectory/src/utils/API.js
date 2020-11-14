import axios from "axios";

export default {
    getUsers: function(){
        return axios.get("https://randomuser.me/api/?results=50&inc=picture,name,phone,email,dob&nat=us&noinfo")
    }
}