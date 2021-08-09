---
title: 'Auction Service'
built: 'Built using AWS, JavaScript, Serverless'
link: 'https://auction-service-frontend.vercel.app'
github: 'https://github.com/browningjeff1/auction-service'
---

This project was built using AWS Lambda, Amazon Dynamodb, Amazon SQS, Amazon SNS, and Amazon S3 as the backend and React as the frontend to create a simple auction service where users can put items up for sale and buyers can bid on the auctions. 

- Uses Nodejs, AWS, and DynamoDB to query information about auctions and bids.

- Implements a user authentication system with Auth0 for unique users to add, edit, and remove auctions. Also allows users to bid on auctions.

- Utilizes SQS to notify bidders and sellers about the state of the auction.

- Allows users to upload images for their auctions, storing the photos with S3.