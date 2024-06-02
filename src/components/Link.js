import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

function Link({ to, children, className }) {
    const { navigate } = useNavigation();

    const classes = classNames('text-blue-500', 'mb-3')

    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey) return;

        event.preventDefault();

        navigate(to);
    }

    return (
        <a className={classes} href={to} onClick={handleClick}>
            {children}
        </a>
    )
}

export default Link;