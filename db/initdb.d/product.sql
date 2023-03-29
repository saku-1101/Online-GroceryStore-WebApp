CREATE DATABASE IF NOT EXISTS laravel;
use laravel;

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `product_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `product_name` varchar(20) DEFAULT NULL,
  `unit_price` float(8,2) DEFAULT NULL,
  `unit_quantity` varchar(15) DEFAULT NULL,
  `in_stock` int(10) unsigned DEFAULT NULL,
  `category` int(10) unsigned DEFAULT NULL,
  `url` VARCHAR(512) CHARACTER SET 'ascii' COLLATE 'ascii_general_ci' NOT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES (1, 'Apples', 1.99, 'per pound', 100, 1, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (2, 'Bananas', 0.89, 'per pound', 75, 1, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (3, 'Oranges', 2.49, 'per pound', 50, 1, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (4, 'Grapes', 3.99, 'per pound', 25, 1, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (5, 'Carrots', 0.99, 'per pound', 100, 2, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (6, 'Broccoli', 1.49, 'per pound', 75, 2, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (7, 'Cauliflower', 1.99, 'per pound', 50, 2, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (8, 'Lettuce', 1.29, 'per head', 50, 2, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (9, 'Potatoes', 2.99, 'per 5 lb bag', 25, 3, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (10, 'Onions', 1.49, 'per pound', 75, 3, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (11, 'Garlic', 0.99, 'per bulb', 100, 3, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (12, 'Green Beans', 1.99, 'per pound', 50, 4, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (13, 'Peas', 2.49, 'per pound', 25, 4, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (14, 'Corn', 0.99, 'per ear', 75, 4, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (15, 'Asparagus', 3.99, 'per pound', 25, 4, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (16, 'Milk', 2.49, 'per gallon', 50, 5, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (17, 'Eggs', 1.99, 'per dozen', 75, 5, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (18, 'Butter', 3.49, 'per pound', 25, 5, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (19, 'Cheese', 4.99, 'per pound', 50, 5, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (20, 'Bread', 1.49, 'per loaf', 100, 6, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (21, 'Bagels', 2.49, 'per 6 pack', 75, 6, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (22, 'English Muffins', 1.99, 'per 6 pack', 50, 6, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (23, 'Hamburger Buns', 1.49, 'per 8 pack', 75, 6, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (24, 'Hot Dog Buns', 1.49, 'per 8 pack', 75, 6, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (25, 'Chicken', 4.99, 'per pound', 25, 7, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (26, 'Beef', 6.99, 'per pound', 50, 7, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (27, 'Pork', 3.99, 'per pound', 75, 7, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (28, 'Fish', 9.99, 'per pound', 25, 7, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (29, 'Pasta', 1.49, 'per pound', 100, 8, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (30, 'Rice', 2.49, 'per pound', 75, 8, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (31, 'Quinoa', 4.99, 'per pound', 50, 8, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (32, 'Couscous', 2.99, 'per pound', 75, 8, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (33, 'Tomatoes', 2.99, 'per pound', 50, 1, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (34, 'Cucumbers', 0.99, 'per pound', 75, 1, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (35, 'Bell Peppers', 1.99, 'per pound', 50, 1, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (36, 'Zucchini', 1.49, 'per pound', 75, 1, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (37, 'Yellow Squash', 1.49, 'per pound', 75, 1, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (38, 'Sweet Potatoes', 1.99, 'per pound', 50, 3, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (39, 'Russet Potatoes', 1.99, 'per 5 lb bag', 50, 3, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (40, 'Canned Tomatoes', 1.29, 'per can', 100, 9, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (41, 'Canned Corn', 0.99, 'per can', 75, 9, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (42, 'Canned Beans', 1.49, 'per can', 50, 9, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (43, 'Canned Soup', 1.99, 'per can', 50, 9, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (44, 'Peanut Butter', 3.99, 'per jar', 50, 10, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (45, 'Jelly', 2.49, 'per jar', 75, 10, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (46, 'Bologna', 2.99, 'per pound', 25, 7, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (47, 'Hot Dogs', 3.49, 'per pack', 50, 7, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (48, 'Ground Turkey', 4.99, 'per pound', 50, 7, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (49, 'Ground Beef', 5.99, 'per pound', 50, 7, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (50, 'Steak', 12.99, 'per pound', 25, 7, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (51, 'Chicken Nuggets', 3.49, 'per bag', 50, 7, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (52, 'Frozen Vegetables', 2.49, 'per bag', 75, 11, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (53, 'Frozen Pizza', 4.99, 'per pizza', 50, 11, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (54, 'Ice Cream', 3.99, 'per pint', 25, 11, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (55, 'Frozen Dinners', 2.99, 'per dinner', 50, 11, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (56, 'Baking Powder', 1.99, 'per can', 100, 12, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (57, 'Baking Soda', 0.99, 'per box', 75, 12, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (58, 'Flour', 2.99, 'per bag', 50, 12, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (59, 'Sugar', 1.99, 'per bag', 75, 12, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (60, 'Salt', 0.99, 'per box', 100, 12, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (61, 'Pepper', 1.49, 'per container', 75, 12, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (62, 'Olive Oil', 6.99, 'per bottle', 25, 13, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (63, 'Vegetable Oil', 2.99, 'per bottle', 50, 13, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (64, 'Canola Oil', 3.99, 'per bottle', 50, 13, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (65, 'Vinegar', 1.99, 'per bottle', 75, 13, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (66, 'Ketchup', 2.49, 'per bottle', 50, 14, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (67, 'Mustard', 1.99, 'per bottle', 75, 14, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (68, 'Mayonnaise', 3.49, 'per jar', 50, 14, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (69, 'Barbecue Sauce', 2.99, 'per bottle', 50, 14, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (70, 'Soy Sauce', 2.49, 'per bottle', 75, 14, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (71, 'Rice', 2.99, 'per bag', 50, 15, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (72, 'Pasta', 1.99, 'per box', 75, 15, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (73, 'Spaghetti Sauce', 2.49, 'per jar', 50, 15, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (74, 'Macaroni and Cheese', 0.99, 'per box', 75, 15, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (75, 'Popcorn', 1.49, 'per bag', 100, 16, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (76, 'Potato Chips', 2.99, 'per bag', 75, 16, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (77, 'Tortilla Chips', 1.99, 'per bag', 75, 16, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (78, 'Salsa', 2.49, 'per jar', 50, 16, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (79, 'Pretzels', 1.99, 'per bag', 75, 16, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (80, 'Cookies', 2.99, 'per package', 50, 17, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (81, 'Crackers', 1.99, 'per package', 75, 17, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (82, 'Granola Bars', 2.49, 'per box', 50, 17, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (83, 'Cereal', 3.99, 'per box', 50, 17, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (84, 'Milk', 2.99, 'per gallon', 25, 18, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (85, 'Cheese', 4.99, 'per pound', 25, 18, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (86, 'Yogurt', 0.99, 'per cup', 75, 18, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (87, 'Eggs', 2.49, 'per dozen', 50, 19, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (88, 'Bread', 1.99, 'per loaf', 75, 20, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (89, 'Bagels', 2.99, 'per package', 50, 20, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (90, 'English Muffins', 2.49, 'per package', 50, 20, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (91, 'Donuts', 3.99, 'per dozen', 25, 20, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (92, 'Orange Juice', 2.99, 'per carton', 50, 21, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (93, 'Apple Juice', 2.49, 'per carton', 50, 21, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (94, 'Grape Juice', 3.49, 'per carton', 50, 21, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (95, 'Soda', 1.99, 'per bottle', 75, 22, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (96, 'Sports Drinks', 2.49, 'per bottle', 50, 22, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (97, 'Energy Drinks', 3.49, 'per can', 50, 22, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (98, 'Bottled Water', 0.99, 'per bottle', 75, 22, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (99, 'Beer', 8.99, 'per 6-pack', 25, 23, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');
INSERT INTO `products` VALUES (100, 'Wine', 14.99, 'per bottle', 20, 23, 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/QvkAQTNj4zk');