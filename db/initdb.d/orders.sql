CREATE TABLE `orders` (
  `order_id` bigint unsigned not null auto_increment primary key,
  `total_amount` float(8,2) DEFAULT '0',
  `order_date` datetime default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  `created_at` timestamp not null default CURRENT_TIMESTAMP,
  `updated_at` timestamp not null default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
