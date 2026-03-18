import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AbstractRespository } from "src/common/database/abstract.respository";
import { User } from "./entities/user.entity";


@Injectable()
export class UserRepository extends AbstractRespository<User> {
	protected readonly logger = new Logger(UserRepository.name);

	constructor(@InjectModel(User.name) userModel: Model<User>){
	    super(userModel);
    }
}
