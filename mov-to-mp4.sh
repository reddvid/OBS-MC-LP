#!/bin/bash

find ./input/ -type f \( -iname "*.mov" \) -exec sh -c 'ffmpeg -i "$0" -b:v 10400k -vcodec h264_amf  "output/$(basename "$0" .mov).mp4"' {} \;

exit