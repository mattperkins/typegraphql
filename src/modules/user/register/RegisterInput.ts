import { Length, IsEmail } from "class-validator"
import { InputType, Field } from "type-graphql";
import { DoesEmailExist } from "./DoesEmailExist";

@InputType()
export class RegisterInput {
  @Field()
  @Length(1, 255)
  firstName: string

  @Field()
  @Length(1, 255)
  lastName: string

  @Field()
  @IsEmail()
  @DoesEmailExist({ message: "Email already exists" })
  email: string

  @Field()
  password: string
}