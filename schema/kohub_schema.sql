DROP DATABASE IF EXISTS Kohub;

CREATE DATABASE IF NOT EXISTS `Kohub` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;

USE `Kohub`;

CREATE TABLE IF NOT EXISTS `users` (
    userId int NOT NULL AUTO_INCREMENT,
    userName Varchar(100) NOT NULL,
    email Varchar(100) NOT NULL,
    password Varchar(100) NOT NULL,
    role Varchar(45) DEFAULT 'user',
    PRIMARY KEY (userId)
);

CREATE TABLE IF NOT EXISTS `coworking` (
    placeId int NOT NULL AUTO_INCREMENT,
    placeName VARCHAR(100) NOT NULL,
    descr VARCHAR(999) NOT NULL,
    rating int NOT NULL,
    seat int NOT NULL,
    parking int NOT NULL,
    freewifi int NOT NULL,
    charging int NOT NULL,
    food int NOT NULL,
    bakery int NOT NULL,
    meetingroom int NOT NULL,
    quietzone int NOT NULL,
    smokezone int NOT NULL,
    locate VARCHAR(100) NOT NULL,
    image VARCHAR(199) NOT NULL,
    PRIMARY KEY (placeId)
);

CREATE TABLE IF NOT EXISTS Log_info (
    Log_id int NOT NULL AUTO_INCREMENT,
    userId int,
    Log_time datetime,
    PRIMARY KEY (Log_id),
    FOREIGN KEY (userId) REFERENCES users(userId)
);

INSERT INTO `users` (`userName`, `email`, `password`, `role`) 
VALUES 
('PorameeA', 'PorameeA@example.com' ,'password007', 'admin'),
('PawitaP', 'PawitaP@example.com','password060','admin'),
('KanyanatS', 'KanyanatS@example.com','password083','admin'),
('ChanayachaS', 'ChanayachaS@example.com', 'password098', 'admin'),
('PattanunW', 'PattanunW@example.com', 'password148', 'admin'),
('JidapaK', 'JidapaK@example.com', 'passwordAJ', 'admin'),
('sarahjones', 'sarahjones@example.com', 'passwordjkl', 'user'),
('markbrown','markbrown@example.com','passwordmno', 'user'),
('ellencarter','ellencarter@example.com', 'passwordpqr', 'user'),
('peterparker','peterparker@example.com', 'passwordstu', 'user'),
('johnsmith','johnsmith@example.com', 'password123', 'user');


INSERT INTO `coworking` (`placeName`, `descr`, `rating`, `seat`, `parking`, `freewifi`, `charging`, `food`, `bakery`, `meetingroom`, `quietzone`, `smokezone`, `locate`, `image`)
VALUES 
('Work Spot', 'The Work Spot is a stylish and comfortable coworking space that caters to freelancers, entrepreneurs, and small businesses. Our modern and cozy workspace is designed to help you stay focused and productive, with amenities like high-speed internet, printing and scanning services, and free coffee and tea. Whether you need a quiet spot to work solo or a collaborative environment to meet and network with other professionals, The Work Spot has everything you need to succeed. Contact us today to book your spot!', 4.5, 30, 1, 1, 1, 1, 0, 1, 1, 0, 'Bangkok, Thailand', 'https://m1r.ai/9/76t2m.jpg'),
('OneSpace','OneSpace is a modern and stylish co-working space in Udon Thani, offering a mix of private offices, hot desks, and meeting rooms. The space is designed to foster collaboration and networking among its members, with regular events and workshops held on-site.', 4, 60, 0, 1, 1, 1, 1, 1, 1, 0, 'Udon Thani City, Udon Thani', 'https://m1r.ai/9/zircq.jpg'),
('Launchpad', 'The Launchpad is a coworking space designed for creative professionals who are looking for a flexible and inspiring workspace. Our open-plan office is flooded with natural light and features comfortable workstations, meeting rooms, and private offices. We provide high-speed internet, printing and scanning services, and free coffee and tea to keep you energized and focused. Our community is made up of designers, writers, developers, and entrepreneurs who are passionate about their work and are always eager to collaborate and share ideas. Join us and take your business to the next level!', 4.2, 40, 0, 1, 0, 1, 1, 1, 1, 0, 'Phuket, Thailand', 'https://m1r.ai/9/okqe5.jpg'),
('Workspace', 'The Workspace is a coworking space that offers a professional and productive environment for entrepreneurs, small businesses, and remote workers. Our space features modern and ergonomic workstations, private offices, meeting rooms, and a lounge area. We provide high-speed internet, printing and scanning services, and free coffee and tea to keep you fueled throughout the day. Our community is full of diverse professionals who are always willing to connect and collaborate. Join us and take your business to the next level!', 4.0, 25, 1, 1, 1, 0, 0, 1, 1, 0, 'Bangkok, Thailand', 'https://m1r.ai/9/t0x2j.jpg'),
('Hive Thonglor', 'The Hive Thonglor is a trendy and modern co-working space located in the heart of Bangkok. With over 500 seats available, it offers a variety of spaces for freelancers and entrepreneurs to work, network, and collaborate. The Hive Thonglor also features a rooftop bar and lounge, perfect for unwinding after a productive day of work.', 4, 500, 1, 1, 1, 1, 1, 1, 1, 0, 'Bangkok, Thailand', 'https://m1r.ai/9/mxn7m.jpg'),
('Hubba Thailand', 'Hubba Thailand is a vibrant co-working space with locations in both Bangkok and Chiang Mai. With over 1,000 members and counting, it is a popular choice for entrepreneurs, creatives, and remote workers looking for a supportive community and inspiring environment. Hubba Thailand also offers a range of events and workshops to help members develop their skills and grow their businesses.', 4.5, 1000, 1, 1, 1, 1, 0, 1, 1, 0, 'Bangkok & Chiang Mai, Thailand', 'https://m1r.ai/9/bez4k.jpeg'),
('The Work Loft', 'The Work Loft is a boutique co-working space located in the heart of Bangkok\'s business district. With a mix of private offices and shared workspaces, it caters to a variety of professionals and businesses. The Work Loft also features a stylish and modern design, with plenty of natural light and greenery to create a refreshing and productive work environment.', 4.8, 50, 1, 1, 1, 1, 1, 1, 0, 0, 'Bangkok, Thailand', 'https://m1r.ai/9/7544j.jpg'),
('Punspace', 'Punspace is a co-working space with locations in Chiang Mai, Thailand. With a focus on community and collaboration, it offers a range of services and amenities to support its members. Punspace also hosts regular events and workshops, including skill-sharing sessions and networking events, to help its members connect and grow their businesses.', 4.3, 150, 1, 1, 1, 1, 0, 0, 1, 1, 'Chiang Mai, Thailand', 'https://m1r.ai/9/1sb16.jpg'),
("WeWork T-One Building", "WeWork T-One Building is a premier coworking space in the heart of Bangkok's business district. With its sleek and modern design, it's the perfect place for entrepreneurs, startups, and established businesses to work and collaborate. The space offers private offices, hot desks, and conference rooms, as well as high-speed Wi-Fi, printing and scanning services, and complimentary refreshments.", 5, 100, 1, 1, 1, 1, 0, 1, 0,0, "Bangkok, Thailand", "https://m1r.ai/9/kw4qf.jpg"),
("Regus", "Regus Pattaya is a modern and professional coworking space located in the heart of Pattaya. With its stunning sea views and stylish interior, it's the perfect place for entrepreneurs, small businesses, and remote teams to work and collaborate. The space offers private offices, hot desks, and virtual office services, as well as high-speed Wi-Fi, 24/7 access, and professional administrative support.", 3, 40, 1, 1, 1, 1, 0, 1, 0,0, "Pattaya, Thailand", "https://m1r.ai/9/7tnm6.jpg"),
('The Great Room', 'The Great Room is a premium co-working space in Bangkok that offers a range of amenities including private offices, meeting rooms, and a fully-stocked kitchen. With a luxurious and modern interior design, this space is perfect for individuals and teams looking for a professional and inspiring work environment.', 4.7, 80, 1, 1, 1, 1, 1, 1, 1, 0, 'Bangkok', 'https://m1r.ai/9/vaetg.jpg'),
('CAMP', 'CAMP is a co-working space in Bangkok that offers a unique and creative work environment. With a focus on design and innovation, this space is perfect for individuals and teams looking for a stimulating and inspiring work environment. Amenities include high-speed internet, meeting rooms, and a fully-stocked kitchen.', 4.4, 50, 1, 1, 1, 1, 0, 1, 1, 0, 'Bangkok', 'https://m1r.ai/9/sfyab.jpg'),
('Too Fast To Sleep', 'Too Fast To Sleep is a unique co-working space in Bangkok that operates 24/7, providing a haven for night owls and early birds alike. The space offers a variety of seating options, from hot desks toprivate offices, and is equipped with modern amenities to cater to the needs of its diverse community.', 4, 120, 0, 1, 1, 1, 1, 1, 1, 0, 'Siam, Bangkok', 'https://m1r.ai/9/lr0vi.jpg'),
('The Brick Space', 'The Brick Space is a cozy and inviting co-working space in Pattaya, offering a mix of hot desks, private offices, and meeting rooms. The space is designed to foster a sense of community and collaboration, with regular events and workshops for members.', 4, 60, 0, 1, 1, 0, 0, 1, 1, 0, 'Pattaya, Chonburi', 'https://m1r.ai/9/vm2jj.jpg'),
('Draft Board', 'Draft Board is a modern and innovative co-working space in Bangkok, offering a mix of private offices, hot desks, and dedicated workstations. With its sleek design and state-of-the-art amenities, Draft Board attracts a diverse community of entrepreneurs, freelancers, and creatives.', 5, 120, 1, 1, 1, 1, 1, 1, 1, 0, 'Ratchathewi, Bangkok', 'https://m1r.ai/9/v8aja.jpg'),
('WYH.Boutique and Design Hostel', 'WYH.Boutique and Design Hostel is a stylish co-working space and hostel located in the heart of Bangkok, offering a mix of hot desks, private offices, and meeting rooms. The space attracts a diverse crowd of digital nomads, entrepreneurs, and freelancers.', 4, 50, 0, 1, 1, 1, 1, 0, 1, 0, 'Sukhumvit, Bangkok', 'https://m1r.ai/9/zmqja.jpg'),
('SPACE 49', 'SPACE 49 is a collaborative co-working space in Chiang Rai, offering a mix of hot desks, dedicated desks, and meeting rooms. The space features a friendly and supportive community, with regular workshops and events to help members grow and thrive.', 4, 70, 0, 1, 1, 0, 0, 1, 1, 0, 'Chiang Rai City, Chiang Rai', 'https://m1r.ai/9/x62r4.jpg'),
('KohSpace', 'KohSpace is a popular co-working space on the island of Koh Phangan, offering a mix of hot desks, dedicated desks, and meeting rooms. The space is known for its stunning location, relaxed atmosphere, and vibrant community of digital nomads and entrepreneurs.', 4, 40, 0, 1, 1, 1, 1, 0, 1, 0, 'Koh Phangan, Surat Thani', 'https://m1r.ai/9/t3xiq.jpg'),
('MANA Co-working Space', 'MANA Co-working Space is a modern and well-equipped co-working space in Phuket, offering a range of flexible workspaces, meeting rooms, and event spaces. With its stunning views and vibrant community, MANA is an ideal place for digital nomads and entrepreneurs.', 5, 90, 1, 1, 1, 1, 1, 1, 1, 0, 'Phuket Town, Phuket', 'https://m1r.ai/9/pb0ff.jpg'),
('PAH Creative Space', 'PAH Creative Space is a unique co-working space in Khon Kaen, offering a mix of private offices, hot desks, and dedicated workstations. The space has a focus on fostering creativity and innovation, with regular workshops and events for members.', 5, 80, 0, 1, 1, 1, 1, 1, 1, 0, 'Khon Kaen City, Khon Kaen', 'https://m1r.ai/9/3uavw.jpg');