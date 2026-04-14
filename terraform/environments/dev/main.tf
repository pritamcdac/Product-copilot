provider "aws" {
  region = "ap-south-1"
}

resource "aws_s3_bucket" "bad_bucket" {
  bucket = "my-3tier-poc-bucket"
}