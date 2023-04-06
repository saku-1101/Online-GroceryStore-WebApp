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
  `sub_category` int(10) unsigned DEFAULT NULL,
  `url` VARCHAR(512) CHARACTER SET 'ascii' COLLATE 'ascii_general_ci' NOT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES (1, 'Apples', 1.99, 'per pound', 100, 1, 1, 'https://source.unsplash.com/P2X7NDx_GP0');
INSERT INTO `products` VALUES (2, 'Bananas', 0.89, 'per pound', 75, 1, 1, 'https://source.unsplash.com/DkTuGvgPotA');
INSERT INTO `products` VALUES (3, 'Oranges', 2.49, 'per pound', 50, 1, 1, 'https://source.unsplash.com/A4BBdJQu2co');
INSERT INTO `products` VALUES (4, 'Grapes', 3.99, 'per pound', 25, 1, 1, 'https://source.unsplash.com/y2MeW00BdBo');
INSERT INTO `products` VALUES (5, 'Carrots', 0.99, 'per pound', 100, 1, 2, 'https://source.unsplash.com/ZgDHMMd72I8');
INSERT INTO `products` VALUES (6, 'Broccoli', 1.49, 'per pound', 75, 1, 2, 'https://source.unsplash.com/4fTaeH37eH0');
INSERT INTO `products` VALUES (7, 'Cauliflower', 1.99, 'per pound', 50, 1, 2, 'https://source.unsplash.com/zNsSGYXaeP8');
INSERT INTO `products` VALUES (8, 'Lettuce', 1.29, 'per head', 50, 1, 2, 'https://source.unsplash.com/YLeRHRiRgts');
INSERT INTO `products` VALUES (9, 'Potatoes', 2.99, 'per 5 lb bag', 25, 1, 3, 'https://source.unsplash.com/52DMHPBAvXY');
INSERT INTO `products` VALUES (10, 'Onions', 1.49, 'per pound', 75, 1, 3, 'https://source.unsplash.com/CNZ-9s5p2i8');
INSERT INTO `products` VALUES (11, 'Garlic', 0.99, 'per bulb', 100, 1, 3, 'https://source.unsplash.com/vIiye0QDryo');
INSERT INTO `products` VALUES (12, 'Green Beans', 1.99, 'per pound', 50, 1, 4, 'https://source.unsplash.com/BAQPTB2D5NM');
INSERT INTO `products` VALUES (13, 'Peas', 2.49, 'per pound', 25, 1, 4, 'https://source.unsplash.com/bwKUJ3Y5JS4');
INSERT INTO `products` VALUES (14, 'Corn', 0.99, 'per ear', 75, 1, 4, 'https://source.unsplash.com/HE_MjmWh9eQ');
INSERT INTO `products` VALUES (15, 'Asparagus', 3.99, 'per pound', 25, 1, 4, 'https://source.unsplash.com/1xGKxpCoM5s');
INSERT INTO `products` VALUES (16, 'Milk', 2.49, 'per gallon', 50, 2, 5, 'https://source.unsplash.com/5SN5N5-JM3c');
INSERT INTO `products` VALUES (17, 'Eggs', 1.99, 'per dozen', 75, 2, 5, 'https://source.unsplash.com/Hj53USePB1E');
INSERT INTO `products` VALUES (18, 'Butter', 3.49, 'per pound', 25, 2, 5, 'https://source.unsplash.com/094mP_CBdpM');
INSERT INTO `products` VALUES (19, 'Cheese', 4.99, 'per pound', 50, 2, 5, 'https://source.unsplash.com/_L5MGd0w1FQ');
INSERT INTO `products` VALUES (23, 'Hamburger Buns', 1.49, 'per 8 pack', 75, 3, 20, 'https://source.unsplash.com/Zu_w3tFOtUA');
INSERT INTO `products` VALUES (24, 'Hot Dog Buns', 1.49, 'per 8 pack', 75, 3, 20, 'https://source.unsplash.com/w96PYF0Uwjs');
INSERT INTO `products` VALUES (25, 'Chicken', 4.99, 'per pound', 25, 4, 7, 'https://source.unsplash.com/9zLa37VNL38');
INSERT INTO `products` VALUES (26, 'Beef', 6.99, 'per pound', 50, 4, 7, 'https://source.unsplash.com/WmTK_QfDxlE');
INSERT INTO `products` VALUES (27, 'Pork', 3.99, 'per pound', 75, 4, 7, 'https://source.unsplash.com/o_qvA6R7hgs');
INSERT INTO `products` VALUES (28, 'Fish', 9.99, 'per pound', 25, 4, 7, 'https://source.unsplash.com/VZsP-aIVqBs');
INSERT INTO `products` VALUES (29, 'Pasta', 1.49, 'per pound', 100, 5, 8, 'https://source.unsplash.com/flFd8L7_B3g');
INSERT INTO `products` VALUES (30, 'Rice', 2.49, 'per pound', 75, 5, 8, 'https://source.unsplash.com/OgMfLdsObWY');
INSERT INTO `products` VALUES (31, 'Quinoa', 4.99, 'per pound', 50, 5, 8, 'https://source.unsplash.com/oZ4Krez3X5o');
INSERT INTO `products` VALUES (32, 'Couscous', 2.99, 'per pound', 75, 5, 8, 'https://source.unsplash.com/RELOvb0rrCE');
INSERT INTO `products` VALUES (33, 'Tomatoes', 2.99, 'per pound', 50, 1, 1, 'https://source.unsplash.com/eb26eV-ys_k');
INSERT INTO `products` VALUES (34, 'Cucumbers', 0.99, 'per pound', 75, 1, 1, 'https://source.unsplash.com/2Wc_pUOviaU');
INSERT INTO `products` VALUES (35, 'Bell Peppers', 1.99, 'per pound', 50, 1, 1, 'https://source.unsplash.com/qHfJPxOnXi4');
INSERT INTO `products` VALUES (36, 'Zucchini', 1.49, 'per pound', 75, 1, 1, 'https://source.unsplash.com/T78BW9onx-I');
INSERT INTO `products` VALUES (37, 'Yellow Squash', 1.49, 'per pound', 75, 1, 1, 'https://source.unsplash.com/amN--aKfV1Q');
INSERT INTO `products` VALUES (38, 'Sweet Potatoes', 1.99, 'per pound', 50, 1, 3, 'https://source.unsplash.com/Sp67-UQeynY');
INSERT INTO `products` VALUES (39, 'Russet Potatoes', 1.99, 'per 5 lb bag', 50, 1, 3, 'https://source.unsplash.com/ALqYYgPPwQ8');
INSERT INTO `products` VALUES (40, 'Canned Tomatoes', 1.29, 'per can', 100, 5, 9, 'https://source.unsplash.com/FzB_512zvP0');
INSERT INTO `products` VALUES (41, 'Canned Corn', 0.99, 'per can', 75, 5, 9, 'https://source.unsplash.com/Sk8eWqGLG18');
INSERT INTO `products` VALUES (42, 'Canned Beans', 1.49, 'per can', 50, 5, 9, 'https://source.unsplash.com/oD7H_J-vJm4');
INSERT INTO `products` VALUES (43, 'Canned Soup', 1.99, 'per can', 50, 5, 9, 'https://source.unsplash.com/Vl78eNdiJaQ');
INSERT INTO `products` VALUES (44, 'Peanut Butter', 3.99, 'per jar', 50, 5, 10, 'https://source.unsplash.com/q-RyWM8uYwY');
INSERT INTO `products` VALUES (45, 'Jelly', 2.49, 'per jar', 75, 8, 17, 'https://source.unsplash.com/LU_fCezP9-o');
INSERT INTO `products` VALUES (46, 'Bologna', 2.99, 'per pound', 25, 6, 6, 'https://source.unsplash.com/sA3wymYqyaI');
INSERT INTO `products` VALUES (47, 'Hot Dogs', 3.49, 'per pack', 50, 6, 6, 'https://source.unsplash.com/0GDN7NSoYRI');
INSERT INTO `products` VALUES (48, 'Ground Turkey', 4.99, 'per pound', 50, 6, 6, 'https://source.unsplash.com/O4wSmNb6w18');
INSERT INTO `products` VALUES (49, 'Ground Beef', 5.99, 'per pound', 50, 4, 7, 'https://source.unsplash.com/pEv_SxDR9cA');
INSERT INTO `products` VALUES (50, 'Steak', 12.99, 'per pound', 25, 6, 6, 'https://source.unsplash.com/pe9dvM1rQkM');
INSERT INTO `products` VALUES (51, 'Chicken Nuggets', 3.49, 'per bag', 50, 6, 6, 'https://source.unsplash.com/TEplqAWpCIs');
INSERT INTO `products` VALUES (52, 'Frozen Vegetables', 2.49, 'per bag', 75, 7, 11, 'https://source.unsplash.com/3TmhC2vquPk');
INSERT INTO `products` VALUES (53, 'Frozen Pizza', 4.99, 'per pizza', 50, 7, 11, 'https://source.unsplash.com/MQUqbmszGGM');
INSERT INTO `products` VALUES (54, 'Ice Cream', 3.99, 'per pint', 25, 7, 11, 'https://source.unsplash.com/qhFDN9xatTQ');
INSERT INTO `products` VALUES (55, 'Frozen Dinners', 2.99, 'per dinner', 50, 7, 11, 'https://source.unsplash.com/XRqTzBvCYEQ');
INSERT INTO `products` VALUES (56, 'Baking Powder', 1.99, 'per can', 100, 5, 12, 'https://source.unsplash.com/_BnaUdHjPnY');
INSERT INTO `products` VALUES (57, 'Baking Soda', 0.99, 'per box', 75, 5, 12, 'https://source.unsplash.com/S9NchuPb79I');
INSERT INTO `products` VALUES (58, 'Flour', 2.99, 'per bag', 50, 5, 12, 'https://source.unsplash.com/clUKWRNm27w');
INSERT INTO `products` VALUES (59, 'Sugar', 1.99, 'per bag', 75, 5, 12, 'https://source.unsplash.com/u_Mwofs_zu0');
INSERT INTO `products` VALUES (60, 'Salt', 0.99, 'per box', 100, 5, 12, 'https://source.unsplash.com/sSLI7KXPwzU');
INSERT INTO `products` VALUES (61, 'Pepper', 1.49, 'per container', 75, 5, 12, 'https://source.unsplash.com/jtKNexfk33c');
INSERT INTO `products` VALUES (62, 'Olive Oil', 6.99, 'per bottle', 25, 5, 13, 'https://source.unsplash.com/LcaMnwGUpug');
INSERT INTO `products` VALUES (63, 'Vegetable Oil', 2.99, 'per bottle', 50, 5, 13, 'https://source.unsplash.com/4_hFxTsmaO4');
INSERT INTO `products` VALUES (64, 'Canola Oil', 3.99, 'per bottle', 50, 5, 13, 'https://source.unsplash.com/8Ud1b6skE8k');
INSERT INTO `products` VALUES (65, 'Vinegar', 1.99, 'per bottle', 75, 5, 13, 'https://source.unsplash.com/JisBRLc-YRY');
INSERT INTO `products` VALUES (66, 'Ketchup', 2.49, 'per bottle', 50, 5, 14, 'https://source.unsplash.com/l9x4U45VeNw');
INSERT INTO `products` VALUES (67, 'Mustard', 1.99, 'per bottle', 75, 5, 14, 'https://source.unsplash.com/LBPpGIKzXok');
INSERT INTO `products` VALUES (68, 'Mayonnaise', 3.49, 'per jar', 50, 5, 14, 'https://source.unsplash.com/4caIPcmVDII');
INSERT INTO `products` VALUES (69, 'Barbecue Sauce', 2.99, 'per bottle', 50, 5, 14, 'https://source.unsplash.com/cuNdbhxijVw');
INSERT INTO `products` VALUES (70, 'Soy Sauce', 2.49, 'per bottle', 75, 5, 14, 'https://source.unsplash.com/McP48IRa7Mo');
INSERT INTO `products` VALUES (71, 'Rice', 2.99, 'per bag', 50, 5, 15, 'https://source.unsplash.com/OgMfLdsObWY');
INSERT INTO `products` VALUES (72, 'Pasta', 1.99, 'per box', 75, 5, 15, 'https://source.unsplash.com/flFd8L7_B3g');
INSERT INTO `products` VALUES (73, 'Spaghetti Sauce', 2.49, 'per jar', 50, 5, 15, 'https://source.unsplash.com/WENdZ6LH9Pg');
INSERT INTO `products` VALUES (74, 'Macaroni and Cheese', 0.99, 'per box', 75, 5, 15, 'https://source.unsplash.com/b1dxNswO_C4');
INSERT INTO `products` VALUES (75, 'Popcorn', 1.49, 'per bag', 100, 8, 16, 'https://source.unsplash.com/ViI6qkoRfNA');
INSERT INTO `products` VALUES (76, 'Potato Chips', 2.99, 'per bag', 75, 8, 16, 'https://source.unsplash.com/GiTJpq74ER0');
INSERT INTO `products` VALUES (77, 'Tortilla Chips', 1.99, 'per bag', 75, 8, 16, 'https://source.unsplash.com/oxVlbTo7ZpI');
INSERT INTO `products` VALUES (78, 'Salsa', 2.49, 'per jar', 50, 8, 16, 'https://source.unsplash.com/IuEm3Y3RTXU');
INSERT INTO `products` VALUES (79, 'Pretzels', 1.99, 'per bag', 75, 8, 16, 'https://source.unsplash.com/f3wRaue-5oI');
INSERT INTO `products` VALUES (80, 'Cookies', 2.99, 'per package', 50, 8, 17, 'https://source.unsplash.com/z8kriatLFdA');
INSERT INTO `products` VALUES (81, 'Crackers', 1.99, 'per package', 75, 8, 17, 'https://source.unsplash.com/DnHnW-3I04I');
INSERT INTO `products` VALUES (82, 'Granola Bars', 2.49, 'per box', 50, 8, 17, 'https://source.unsplash.com//Y-VDI9vQS3M');
INSERT INTO `products` VALUES (83, 'Cereal', 3.99, 'per box', 50, 8, 17, 'https://source.unsplash.com/EV6C1LjH1Lk');
INSERT INTO `products` VALUES (84, 'Milk', 2.99, 'per gallon', 25, 2, 18, 'https://source.unsplash.com/5SN5N5-JM3c');
INSERT INTO `products` VALUES (85, 'Cheese', 4.99, 'per pound', 25, 2, 18, 'https://source.unsplash.com/YW_5rJvAdKw');
INSERT INTO `products` VALUES (86, 'Yogurt', 0.99, 'per cup', 75, 2, 18, 'https://source.unsplash.com/URTkjdRhQLk');
INSERT INTO `products` VALUES (87, 'Eggs', 2.49, 'per dozen', 50, 2, 19, 'https://source.unsplash.com/leOh1CzRZVQ');
INSERT INTO `products` VALUES (88, 'Bread', 1.99, 'per loaf', 75, 3, 20, 'https://source.unsplash.com/rsWZ-P9FbQ4');
INSERT INTO `products` VALUES (89, 'Bagels', 2.99, 'per package', 50, 3, 20, 'https://source.unsplash.com/Z9yALdymUUI');
INSERT INTO `products` VALUES (90, 'English Muffins', 2.49, 'per package', 50, 3, 20, 'https://source.unsplash.com/A5jf5EmBAf8');
INSERT INTO `products` VALUES (91, 'Donuts', 3.99, 'per dozen', 25, 3, 20, 'https://source.unsplash.com/EACvtuV2k2E');
INSERT INTO `products` VALUES (92, 'Orange Juice', 2.99, 'per carton', 50, 9, 21, 'https://source.unsplash.com/TmOGarNOGFs');
INSERT INTO `products` VALUES (93, 'Apple Juice', 2.49, 'per carton', 50, 9, 21, 'https://source.unsplash.com/imEqHThoix8');
INSERT INTO `products` VALUES (94, 'Grape Juice', 3.49, 'per carton', 50, 9, 21, 'https://source.unsplash.com/eXdKs9d37Sc');
INSERT INTO `products` VALUES (95, 'Soda', 1.99, 'per bottle', 75, 9, 22, 'https://source.unsplash.com/Cu3LwxsKpvw');
INSERT INTO `products` VALUES (96, 'Sports Drinks', 2.49, 'per bottle', 50, 9, 22, 'https://source.unsplash.com/x8ttqxtR-FM');
INSERT INTO `products` VALUES (97, 'Energy Drinks', 3.49, 'per can', 50, 9, 22, 'https://source.unsplash.com/uTBMw32LIOI');
INSERT INTO `products` VALUES (98, 'Bottled Water', 0.99, 'per bottle', 75, 9, 22, 'https://source.unsplash.com/OTDyDgPoJ_0');
INSERT INTO `products` VALUES (99, 'Beer', 8.99, 'per 6-pack', 25, 9, 23, 'https://source.unsplash.com/MwQUHxU6mag');
INSERT INTO `products` VALUES (100, 'Wine', 14.99, 'per bottle', 20, 9, 23, 'https://source.unsplash.com/3uJt73tr4hI');