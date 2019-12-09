import Link from 'next/link';

const linkStyle = {
    marginRight: 15,
    textDecoration: 'none'
};

const Header = () => {
    return (
        <div>
            <Link href="/">
                <a style={linkStyle}>Home</a>
            </Link>
            <Link href="/about">
                <a style={linkStyle}>About</a>
            </Link>
            <Link href="/admins">
            <a style={linkStyle}> Admin</a>
            </Link>
        </div>
    )
}

export default Header;
