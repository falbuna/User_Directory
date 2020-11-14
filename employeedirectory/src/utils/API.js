import axios from "axios";

export default {
    getUsers: function(){
        return axios.get("https://randomuser.me/api/?results=20&inc=picture,name,phone,email,dob&nat=us&noinfo")
    }
}