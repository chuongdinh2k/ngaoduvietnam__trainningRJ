import styled from "styled-components";

export const ComponentLoader = () => {
    return (
        <StyledComponentLoader>
            <div className="wrapperLoader">
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
            </div>
        </StyledComponentLoader>
    );
};
const StyledComponentLoader = styled.div`
    width: 100%;
    height: 100%;
    .wrapperLoader {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .item {
            height: 20px;
            width: 20px;
            box-sizing: border-box;
            border-radius: 50%;
            margin: 4px;
            background-color: white;

            transform: scale(1);
            animation: dotWave 1.2s infinite running;
        }

        .item:nth-child(1) {
            background-color: rgba(2, 172, 201, 1);
            animation-delay: 0s;
        }
        .item:nth-child(2) {
            background-color: rgba(73, 172, 202, 1);
            animation-delay: 0.15s;
        }
        .item:nth-child(3) {
            background-color: rgba(146, 171, 202, 1);
            animation-delay: 0.3s;
        }
        .item:nth-child(4) {
            background-color: rgba(206, 170, 202, 1);
            animation-delay: 0.45s;
        }
        .item:nth-child(5) {
            background-color: rgba(255, 172, 205, 1);
            animation-delay: 0.6s;
        }

        @keyframes dotWave {
            0% {
                opacity: 1;
                transform: scale(1);
            }
            38%,
            42% {
                opacity: 0.5;
                transform: scale(2);
            }
            100% {
                opacity: 1;
                transform: scale(1);
            }
        }
    }
`;