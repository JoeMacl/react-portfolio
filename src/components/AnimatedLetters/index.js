import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    return (
        <span>
            {
                strArray.map((char, i) =>(
                    <span key ={char + i}className={`${letterClass} _${i + idx + 1}`}
>
                        {char}

                    </span>
                ))
            }
        </span>
    )
};

export default AnimatedLetters