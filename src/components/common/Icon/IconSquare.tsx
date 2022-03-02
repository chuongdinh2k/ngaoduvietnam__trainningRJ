import { IIcon } from "@types";

export const IconSquare = (props: IIcon) => {
    const { width = 19, height = 20 } = props;
    return (
        <>
            <svg
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M18.2727 3.91557C18.2727 2.23651 16.9063 0.870117 15.2273 0.870117C14.5996 0.871895 13.9878 1.06804 13.4761 1.4316C12.9644 1.79515 12.5779 2.30827 12.3696 2.90042H5.90311C5.69485 2.30827 5.30831 1.79515 4.7966 1.4316C4.2849 1.06804 3.67316 0.871895 3.04545 0.870117C1.36639 0.870117 0 2.23651 0 3.91557C0 5.2373 0.851712 6.35295 2.0303 6.77322V13.2387C1.43832 13.4475 0.925417 13.8344 0.561929 14.3462C0.19844 14.858 0.00215975 15.4697 0 16.0974C0 17.7765 1.36639 19.1428 3.04545 19.1428C3.67316 19.1411 4.2849 18.9449 4.7966 18.5814C5.30831 18.2178 5.69485 17.7047 5.90311 17.1125H12.3686C12.577 17.7046 12.9636 18.2176 13.4752 18.5812C13.9869 18.9447 14.5986 19.1409 15.2263 19.1428C16.9053 19.1428 18.2717 17.7765 18.2717 16.0974C18.2696 15.4697 18.0733 14.858 17.7098 14.3462C17.3463 13.8344 16.8334 13.4475 16.2414 13.2387V6.77424C16.8337 6.56571 17.3469 6.17899 17.7106 5.66715C18.0743 5.15532 18.2706 4.54346 18.2727 3.91557V3.91557ZM15.2273 2.90042C15.4283 2.90022 15.6249 2.95967 15.7922 3.07125C15.9595 3.18283 16.0899 3.34153 16.1669 3.52725C16.2439 3.71297 16.2642 3.91737 16.225 4.11458C16.1858 4.31179 16.089 4.49295 15.9468 4.63512C15.8047 4.7773 15.6235 4.8741 15.4263 4.91328C15.2291 4.95245 15.0247 4.93224 14.8389 4.85521C14.6532 4.77817 14.4945 4.64777 14.383 4.48051C14.2714 4.31324 14.2119 4.11664 14.2121 3.91557C14.2121 3.35622 14.6669 2.90042 15.2273 2.90042ZM12.3696 15.0822H5.90311C5.75218 14.6574 5.50851 14.2715 5.1898 13.9526C4.8711 13.6338 4.48536 13.3899 4.06061 13.2387V6.77424C4.48536 6.62308 4.8711 6.3792 5.1898 6.06031C5.50851 5.74143 5.75218 5.35556 5.90311 4.93072H12.3686C12.5198 5.35547 12.7636 5.74121 13.0825 6.05992C13.4014 6.37863 13.7873 6.6223 14.2121 6.77322V13.2387C13.7874 13.3899 13.4016 13.6338 13.0829 13.9526C12.7642 14.2715 12.5205 14.6574 12.3696 15.0822V15.0822ZM3.04545 2.90042C3.24652 2.90022 3.44312 2.95967 3.61039 3.07125C3.77765 3.18283 3.90805 3.34153 3.98509 3.52725C4.06213 3.71297 4.08234 3.91737 4.04316 4.11458C4.00398 4.31179 3.90718 4.49295 3.76501 4.63512C3.62283 4.7773 3.44168 4.8741 3.24446 4.91328C3.04725 4.95245 2.84285 4.93224 2.65713 4.85521C2.47141 4.77817 2.31272 4.64777 2.20113 4.48051C2.08955 4.31324 2.0301 4.11664 2.0303 3.91557C2.0303 3.35622 2.48509 2.90042 3.04545 2.90042ZM3.04545 17.1125C2.78407 17.1008 2.53728 16.9888 2.35645 16.7997C2.17562 16.6106 2.0747 16.359 2.0747 16.0974C2.0747 15.8357 2.17562 15.5842 2.35645 15.3951C2.53728 15.206 2.78407 15.0939 3.04545 15.0822C3.30684 15.0939 3.55363 15.206 3.73446 15.3951C3.91529 15.5842 4.01621 15.8357 4.01621 16.0974C4.01621 16.359 3.91529 16.6106 3.73446 16.7997C3.55363 16.9888 3.30684 17.1008 3.04545 17.1125V17.1125ZM15.2273 17.1125C14.9659 17.1008 14.7191 16.9888 14.5383 16.7997C14.3574 16.6106 14.2565 16.359 14.2565 16.0974C14.2565 15.8357 14.3574 15.5842 14.5383 15.3951C14.7191 15.206 14.9659 15.0939 15.2273 15.0822C15.4887 15.0939 15.7355 15.206 15.9163 15.3951C16.0971 15.5842 16.198 15.8357 16.198 16.0974C16.198 16.359 16.0971 16.6106 15.9163 16.7997C15.7355 16.9888 15.4887 17.1008 15.2273 17.1125V17.1125Z"
                    fill="#4F4F4F"
                />
            </svg>
        </>
    );
};