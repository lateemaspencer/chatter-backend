import { Module } from "@nestjs/common";
import { UsersResolver } from "./users.resolver";
import { UsersService } from "./users.service";
import { UserRepository } from "./users.repository";
import { DatabaseModule } from "src/common/database/database.module";
import { User, UserSchema } from "./entities/user.entity";

@Module({
  imports: [
    DatabaseModule.forFeature([
      {name: User.name, schema: UserSchema},
    ]),
  ],
	providers: [UsersResolver, UsersService, UserRepository],
})
export class UsersModule {}
