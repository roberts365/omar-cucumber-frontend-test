targetDeployment = System.getenv("TARGET_DEPLOYMENT")
if (!targetDeployment) {
    targetDeployment = "dev"
}

domainName = System.getenv("DOMAIN_NAME")
if (!domainName) {
    domainName = "ossim.io"
}

s3Bucket = System.getenv("TEST_IMAGE_S3_BUCKET")
if (!s3Bucket) {
    s3Bucket = "o2-test-data/Standard_test_imagery_set"
}

s3BucketUrl = System.getenv("TEST_IMAGE_S3_BUCKET_URL")
if (!s3BucketUrl) {
    s3BucketUrl = "https://s3.amazonaws.com"
}

rbtcloudRootDir = System.getenv("RBT_CLOUD_ROOT_DIR")
if (!rbtcloudRootDir) {
    rbtcloudRootDir = "https://omar-${targetDeployment}.${domainName}"
}


println("\nOMAR URL being tested: ${rbtcloudRootDir}\n")

tlvUrl = "${rbtcloudRootDir}/tlv"
mensaUrl = "${rbtcloudRootDir}/omar-mensa"
wfsUrl = "${rbtcloudRootDir}/omar-wfs"
wmsUrl = "${rbtcloudRootDir}/omar-wms"
wcsUrl = "${rbtcloudRootDir}/omar-wcs"
wmtsUrl = "${rbtcloudRootDir}/omar-wmts"
geoscriptUrl = "${rbtcloudRootDir}/omar-geoscript"
omsUrl = "${rbtcloudRootDir}/omar-oms"
stagerUrl = "${rbtcloudRootDir}/omar-stager"
avroUrl = "${rbtcloudRootDir}/omar-avro"
downloadUrl = "${rbtcloudRootDir}/omar-download"

browsers {
    firefox {
        profile = "/usr/local/browser_profiles/firefox/cucumber_ff_profile"
    }
}
