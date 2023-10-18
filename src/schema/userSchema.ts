import * as mongoose from "mongoose";

/*export interface userschema extends mongoose.Document{
  first_name: string,
  last_name: string,
  contact: string,
  username: string, 
  password: string
}*/

let userSchema = new mongoose.Schema({
	first_name : {
		type : String
	},
	last_name : { 
		type: String
	},
	contact : { 
		type: Number
	},
	username : {
		type : String
	},
	password : {
		type:Number,
		default: 0
	}
});

export default userSchema