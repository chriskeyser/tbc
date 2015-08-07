call c:\aws\security\personal\setkeys.bat
aws s3 cp --recursive --acl "public-read" dist/ s3://tbc-cak-sample/

