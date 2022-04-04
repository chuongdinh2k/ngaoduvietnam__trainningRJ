import styled from "styled-components";

interface ILoading {
    type?: string;
}
export const ComponentLoader = (props: ILoading) => {
    const { type } = props;
    return (
        <StyledComponentLoader type={type}>
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
const StyledComponentLoader = styled.div<ILoading>`
    width: 100%;
    height: 100%;
    min-height: ${(p) => (p.type === "full" ? `70vh` : `70%`)};
    position: relative;
    .wrapperLoader {
        position: absolute;
        height: 100%;
        width: 100%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
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
            background-color: #f1e1a6;
            animation-delay: 0s;
        }
        .item:nth-child(2) {
            background-color: #ffd36e;
            animation-delay: 0.15s;
        }
        .item:nth-child(3) {
            background-color: #fff56d;
            animation-delay: 0.3s;
        }

        .item:nth-child(4) {
            background-color: #f6ffa4;
            animation-delay: 0.45s;
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
