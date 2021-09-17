import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Unique } from './../common';
import { SameAs } from './../common/validator/same-as.validator';
import { User } from './../user';

export class RegisterPayload {
  @ApiProperty({
    required: true,
  })
  @IsEmail()
  @Unique([User])
  email: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @MinLength(5)
  password: string;

  @ApiProperty({ required: true })
  @SameAs('password')
  passwordConfirmation: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  addressLine1: string;

  @ApiProperty({
    required: false,
  })
  addressLine2: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  city: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  state: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    required: false,
  })
  @IsNotEmpty()
  createdBy: string;

  @ApiProperty({
    required: false,
  })
  @IsNotEmpty()
  updatedBy: string;

  @ApiProperty({
    required: false,
  })
  @IsNotEmpty()
  deviceType: string;

  @ApiProperty({
    required: false,
  })
  @IsNotEmpty()
  deviceId: string;
}
