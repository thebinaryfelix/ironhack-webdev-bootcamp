![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# MongoDB | Compass CRUD

## Introduction

We learned about databases, and more specifically, about MongoDB. During the rest of the bootcamp, we will keep using MongoDB as our database, so we need to start practicing a bit. As we mentioned before, almost every web app we develop will include CRUD (Create, Read, Update and Delete) operations within the database. 

For manipulating our database, we learned how to use Mongo Compass, the official GUI of MongoDB. When developing our website, we will do CRUD operations directly from our code, and later on the bootcamp, we will learn how to integrate everything. But for now, you should focus on learning really well how to do queries, and how to use useful features such as **projections, sort, skip or limit**.


## Deliverables

Since we will be querying our database from Mongo Compass, you will need to copy/paste the `query`, `projection`, `sort`, `skip` and `limit` you entered on Mongo Compass. On the `queries.md` file, you will find the instructions about the 25 queries you need to do, and a field to fill the answers.

### Example 

1. This is an example
 - **`query`**: /*You should copy/paste the query in here*/
 - **`projection`**: /*You should copy/paste the projection in here*/
 - **`sort`**: /*You should copy/paste the sort in here*/
 - **`skip`**: /*You should copy/paste the skip in here*/
 - **`limit`**: /*You should copy/paste the limit in here*/

## Instructions

### Iteration 1

First, we need to import the database we will be using for the `lab`. We will use the Crunchbase database. Crunchbase is the premier destination for discovering industry trends, investments, and news about hundreds of thousands of companies globally. From startups to Fortune 500s, Crunchbase is recognized as the primary source of company intelligence by millions of users globally.

The database contains more than 18k documents, and each of them has a lot of information about each of the companies. A document looks like the following:

![image](https://user-images.githubusercontent.com/23629340/36494916-d6db1770-1733-11e8-903e-5119b3c1b688.png)

1. You will find the `.zip` file of the Database on the **lab** folder.
2. Unzip the file
3. From the terminal, import the database to Mongo using the following command:
```bash
$ mongoimport --db companies --collection companies --file companies.json
```
4. Check on Mongo Compass if everything goes ok:

![image](https://user-images.githubusercontent.com/23629340/36534191-1f1bc5ec-17c6-11e8-9463-4945679b98c0.png)

:::info
When running the `mongoimport` you should be located in the same folder the `companies.json` file.
:::

### Iteration 2

Let's start doing our queries; we will be doing the first one together:

1. Find all the companies that include 'Facebook' on the **name** field.

 - **`query`**: {name: 'Facebook'}

:::info
Since we only need a `query` you just need to copy/paste that field.
:::

Let's do it one more together:

2. Find all the companies which **category_code** is 'web'. Retrive only their `name` field:

 - **`query`**: {category_code: 'web'}
 - **`projection`**: {name: 1, _id: 0}

3. Find all the companies named "Twitter", and retrieve only their `name`, `category_code` and `founded_year` fields.
4. Find all the companies who have `web` as their **category_code**, but limit the search to 50 companies.
5. Find all the companies which **category_code** is 'enterprise' and have been founded in 2005. Retrieve only the `name`, `category_code` and `founded_year` fields.
6. Find all the companies that have been **founded** on the 2000 or have 20 **employees**. Sort them descendingly by their `number_of_employees`.
7. Find all the companies that do not include `web` nor `social` on their **category_code**. Limit the search to 20 documents and retrieve only their `name` and `category_code`.
8. Find all the companies that were not **founded** on 'June'. Skip the first 50 results and retrieve only the `founded_month` and `name` fields.
9. Find all the companies that have 50 employees, but do not correspond to the 'web' **category_code**. 
10. Find all the companies that have been founded on the 1st of the month, but does not have either 50 employees nor 'web' as their **category_code**. Retrieve only the `founded_day` and `name` and limit the search to 5 documents.
11. Find all the companies which the `price_amount` of the `acquisition` was **`40.000.000`**. Sort them by `name`.
12. Find all the companies that have been acquired on January of 2014. Retrieve only the `acquisition` and `name` fields.


Good luck! :wink:



