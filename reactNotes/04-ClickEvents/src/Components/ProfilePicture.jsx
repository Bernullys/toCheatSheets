function ProfilePicture () {

    const myAvatar = "../../src/assets/avatar.png"

    const modAvatar = (event) => event.target.style.display = "none"

    return (
        <img onClick={(event) => modAvatar(event)} src={myAvatar} alt="Bernardo-Avatar" />
    )
}

export default  ProfilePicture