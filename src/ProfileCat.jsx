const user = {
	name: "My Fav Singer",
	imageUrl: 'https://i.imgur.com/IE6Xlzt.jpeg',
	imageSize: 200,
	imageWidth: 300,
};

export default function ProfileCat() {
	return(
	<>
	<h1> {user.name} </h1>
	<img className="avatar"
	src={user.imageUrl}
	alt={'Photo of '+user.name}
	style ={{
		width: user.imageWidth,
	height: user.imageSize}} />
	</>);
}