INSERT INTO rooms (id, name, description, price_per_night, image_url) VALUES
                                                                          (1, 'Deluxe Suite', 'A spacious suite with ocean view', 350.00, 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304'),
                                                                          (2, 'Standard Room', 'Comfortable room with all amenities', 120.00, 'https://images.unsplash.com/photo-1566073771259-6a8506099945'),
                                                                          (3, 'Penthouse', 'Luxury penthouse with panoramic views', 800.00, 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b')
    ON CONFLICT (id) DO NOTHING;