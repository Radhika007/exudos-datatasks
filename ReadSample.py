import codecs
import csv

FILENAME = "iris.csv"
ENCODING = 'utf-8'

with codecs.open(FILENAME, "r", ENCODING) as fp:
    reader = csv.reader(fp)

    # read CSV headers
    headers = next(reader)
    print(headers)

    # read rest of file
    for row in reader:
        # Print each row
        print(row)