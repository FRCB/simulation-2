INSERT INTO products
    (imgurl, propertyname, address, city, state, zip, mortgage, rent)
VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8);
SELECT *
FROM houses;