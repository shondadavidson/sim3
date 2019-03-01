select u.id, u.username, u.profile_pic, p.id, p.title, p.img, p.content, p.author_id
from posts3 p
join users3 u on author_id = u.$1 ;