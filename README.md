# MongoDBAtlas-SitchBlogWkshp

## Background

This is the github sample repo to go along with MongoDB Atlas Workshops. It will encompass a few different scenarios:

### Standard Stitch Blog Workshops
In the standard Stitch workshops, we follow a Blog tutorial where we use MongoDB Atlas and MongoDB Stitch to allow QueryAnywhere to insert and view comments on a blog written entirely in front-end javascript.

See the [Blog.md](Guides/Blog.md) to follow along, or the blog post on MongoDB's website [located here](https://docs.mongodb.com/stitch/tutorials/blog-overview/).

The `blog-stitch-cli` folder contains the export of code using the [stitch-cli tool](https://docs.mongodb.com/stitch/import-export/stitch-cli-reference/) and is a good sample.

### Stitch Rekognition Workshops

In scenarios where we want to demonstrate using AWS Rekognition APIs but not everyone has access to their own AWS accounts and we do not want to distribute API keys, this is a good example.

The `rekbackend-stitch-cli` folder contains the export of code using the [stitch-cli tool](https://docs.mongodb.com/stitch/import-export/stitch-cli-reference/)  and represents the middle API call the workshop can use. You can step through the code with the attendees but they would not deploy it. You would deploy it and share the URL of ther webhook.

In this example, they would query `https://webhooks.mongodb-stitch.com/api/client/v2.0/app/wkshp-utilities-dwzzy/service/hook/incoming_webhook/detectLabels?secret=XXXX&uri=YYYY` where `XXXX` is the secret and `YYYY` is the full URL to a JPEG image. It will then return

```
{
    "LabelModelVersion": "2.0",
    "Labels": [{
        "Confidence": { "$numberDouble": "99.27836608886719" },
        "Instances": [],
        "Name": "Monument",
        "Parents": []
    }, {
        "Confidence": {"$numberDouble": "98.91329956054688"},
        "Instances": [],
        "Name": "Statue",
        "Parents": [{ "Name": "Sculpture"}, {"Name": "Art"}]
    }, {
        "Confidence": {"$numberDouble": "98.91329956054688"},
        "Instances": [],
        "Name": "Art",
        "Parents": []
    }, {
        "Confidence": { "$numberDouble": "98.91329956054688"},
        "Instances": [],
        "Name": "Sculpture",
        "Parents": [{"Name": "Art"}]
    }, {
        "Confidence": { "$numberDouble": "72.21047973632812"},
        "Instances": [],
        "Name": "Human",
        "Parents": []
    }, {
        "Confidence": {"$numberDouble": "72.21047973632812"},
        "Instances": [{
            "BoundingBox": {
                "Height": {"$numberDouble": "0.344552606344223"},
                "Left": {"$numberDouble": "0.4248093068599701"},
                "Top": {"$numberDouble": "0.08544600009918213"},
                "Width": {"$numberDouble": "0.1412428766489029"}
            },
            "Confidence": {"$numberDouble": "72.21047973632812"}
        }],
        "Name": "Person",
        "Parents": []
    }]
}
```
when the URL was the Statue of Liberty.

They would follow and build the [StitchWebRequest.md](Guides/StitchWebRequest.md) guide step-by-step.