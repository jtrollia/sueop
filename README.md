# Sueop

[Sueop](https://sueop.jeanloup.me/) is a PWA demo using [Polymer 1.X](https://www.polymer-project.org/1.0/docs/tools/polymer-cli) and [Serverless 1.0](https://github.com/serverless/serverless). Read more [here](https://jeanloup.me/2016/10/10/building-a-progressive-web-app-with-polymer-and-serverless-framework/).

## Stack

### Polymer

```Shell
# install polymer-cli
npm install -g bower
npm install -g polymer-cli

# start Polymer server
polymer serve --open

# build folders for production
polymer build

# clean assets for production
gulp vulcanize
```

### Serverless

```Shell
# download required packages
cd serverless
npm install

# deploy the service
serverless deploy -v

# check CORS
curl -H 'Origin:https://origin.com' --verbose https://endpoint.com/stage/function
```

### AWS cli

```Shell
# setup the cli
aws configure

# delete a bucket
aws s3 rm s3://my.bucket.com/ --recursive

# upload files into a bucket
aws s3 cp /tmp/foo/ s3://my.bucket.com/ --recursive

# upload a json to a dynamo table (max 25 items)
aws dynamodb batch-write-item --request-items file:///home/user/data.json
```

## Data structure (JSON)

`Vocabulary` table
```javascript
{ "Vocabulary": [
  {"PutRequest": {
    "Item": {
      "VocabularyKr": {"S": "낮잠 자다"},
      "VocabularyEn": {"S": "take a nap"},
      "ExampleKR": {"S": "잠시 낮잠 취한다"},
      "ExampleEn": {"S": "Take a little nap"},
      "Tags": {"SS": ["activity"]},
      "Type": {"S": "verb"}
    }
  }},
```

`Grammar` table
```javascript
{ "Grammar": [
  {"PutRequest": {
    "Item": {
      "GrammarKr": {"S": "~ㄹ/을 테니까"},
      "GrammarEn": {"S": "my own duty"}
    }
  }},
```

`History` table
```javascript
{ "History": [
  {"PutRequest": {
    "Item": {
      "EraName": {
        "S": "고조선 시대"
      },
      "SubEras": {
        "L": [
          {
            "M": {
              "SubEraName": {
                "S": "단군조선"
              },
              "SubEraStartDate": {
                "S": "기원전 2333년"
              },
              "SubEraEndDate": {
                "S": "기원 전 194년"
              }
            }
          },
          {
            "M": {
              "SubEraName": {
                "S": "위만조선"
              },
              "SubEraStartDate": {
                "S": "기원전 194년"
              },
              "SubEraEndDate": {
                "S": "기원전 108년"
              }
            }
          },
          {
            "M": {
              "SubEraName": {
                "S": "진국"
              },
              "SubEraStartDate": {
                "S": "기원4세기"
              },
              "SubEraEndDate": {
                "S": "기원전 2세기"
              }
            }
          }
        ]
      }
    }
  }},
```

## Resources

* [S3 cli documentation](http://docs.aws.amazon.com/cli/latest/reference/s3/)
* [DynamoDB cli documentation](http://docs.aws.amazon.com/cli/latest/reference/dynamodb/batch-write-item.html)
* [DynamoDB methods](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html)
* [Hosting a SPA on S3](https://kkob.us/2015/11/24/hosting-a-single-page-app-on-s3-with-proper-urls/)
* [Using a custom SSL with S3 and CF](https://bryce.fisher-fleig.org/blog/setting-up-ssl-on-aws-cloudfront-and-s3/)
