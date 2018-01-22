import styles from 'stylesheets/other'

alert('toto');

export default function () {
    document.querySelector('.test').className = styles.test
    console.log("styles", styles);
}
