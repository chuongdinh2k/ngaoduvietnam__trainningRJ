import { IIcon } from "@types";

export const Flag = (props: IIcon) => {
    return (
        <>
            <svg
                width={props.width ? props.width : "18"}
                height={props.height ? props.height : "20"}
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0.46967 13.4697C0.176777 13.7626 0.176777 14.2375 0.46967 14.5304C0.762563 14.8233 1.23744 14.8233 1.53033 14.5304L0.46967 13.4697ZM17 14L17.5303 14.5304C17.671 14.3897 17.75 14.1989 17.75 14H17ZM17 2.00003H17.75C17.75 1.69668 17.5673 1.42321 17.287 1.30712C17.0068 1.19104 16.6842 1.2552 16.4697 1.4697L17 2.00003ZM1 2.00003L0.46967 1.4697C0.329018 1.61035 0.25 1.80112 0.25 2.00003H1ZM0.25 19C0.25 19.4142 0.585786 19.75 1 19.75C1.41421 19.75 1.75 19.4142 1.75 19H0.25ZM1 14C1.53033 14.5304 1.52995 14.5307 1.52956 14.5311C1.52944 14.5312 1.52906 14.5316 1.52882 14.5319C1.52833 14.5324 1.52785 14.5328 1.52739 14.5333C1.52647 14.5342 1.5256 14.535 1.52479 14.5358C1.52317 14.5374 1.52178 14.5388 1.52062 14.5399C1.5183 14.5421 1.5169 14.5434 1.51647 14.5438C1.51559 14.5445 1.51856 14.5418 1.52561 14.536C1.53968 14.5244 1.57021 14.5004 1.61915 14.4678C1.71676 14.4027 1.88946 14.302 2.15354 14.1964C2.68039 13.9857 3.58454 13.75 5 13.75V12.25C3.41546 12.25 2.31961 12.5144 1.59646 12.8037C1.23554 12.948 0.970738 13.0973 0.7871 13.2197C0.695416 13.2809 0.624381 13.335 0.572048 13.3781C0.545893 13.3997 0.524446 13.4184 0.507458 13.4338C0.498965 13.4416 0.49159 13.4485 0.485302 13.4545C0.482158 13.4575 0.479286 13.4602 0.476682 13.4628C0.47538 13.464 0.474145 13.4653 0.472976 13.4664C0.472392 13.467 0.471824 13.4676 0.471273 13.4681C0.470998 13.4684 0.470597 13.4688 0.470459 13.4689C0.470062 13.4693 0.46967 13.4697 1 14ZM5 13.75C6.33552 13.75 7.45788 14.191 8.72146 14.6964C9.95788 15.191 11.3355 15.75 13 15.75V14.25C11.6645 14.25 10.5421 13.8091 9.27854 13.3037C8.04212 12.8091 6.66448 12.25 5 12.25V13.75ZM13 15.75C14.5845 15.75 15.6804 15.4857 16.4035 15.1964C16.7645 15.052 17.0293 14.9027 17.2129 14.7803C17.3046 14.7192 17.3756 14.665 17.428 14.6219C17.4541 14.6004 17.4756 14.5817 17.4925 14.5662C17.501 14.5585 17.5084 14.5516 17.5147 14.5456C17.5178 14.5426 17.5207 14.5398 17.5233 14.5373C17.5246 14.536 17.5259 14.5348 17.527 14.5336C17.5276 14.5331 17.5282 14.5325 17.5287 14.532C17.529 14.5317 17.5294 14.5313 17.5295 14.5311C17.5299 14.5308 17.5303 14.5304 17 14C16.4697 13.4697 16.4701 13.4693 16.4704 13.4689C16.4706 13.4688 16.4709 13.4684 16.4712 13.4682C16.4717 13.4677 16.4721 13.4672 16.4726 13.4668C16.4735 13.4659 16.4744 13.465 16.4752 13.4642C16.4768 13.4626 16.4782 13.4613 16.4794 13.4602C16.4817 13.458 16.4831 13.4567 16.4835 13.4563C16.4844 13.4555 16.4814 13.4582 16.4744 13.4641C16.4603 13.4756 16.4298 13.4996 16.3808 13.5322C16.2832 13.5973 16.1105 13.698 15.8465 13.8037C15.3196 14.0144 14.4155 14.25 13 14.25V15.75ZM17.75 14V2.00003H16.25V14H17.75ZM17 2.00003C16.4697 1.4697 16.4701 1.46932 16.4704 1.46894C16.4706 1.46881 16.4709 1.46844 16.4712 1.46819C16.4717 1.46771 16.4721 1.46723 16.4726 1.46678C16.4735 1.46587 16.4744 1.46501 16.4752 1.46422C16.4768 1.46264 16.4782 1.4613 16.4794 1.46019C16.4817 1.45798 16.4831 1.4567 16.4835 1.45631C16.4844 1.45551 16.4814 1.45825 16.4744 1.46405C16.4603 1.47564 16.4298 1.49962 16.3808 1.53224C16.2832 1.59732 16.1105 1.69804 15.8465 1.80367C15.3196 2.01441 14.4155 2.25003 13 2.25003V3.75003C14.5845 3.75003 15.6804 3.48565 16.4035 3.19639C16.7645 3.05202 17.0293 2.90274 17.2129 2.78032C17.3046 2.7192 17.3756 2.66505 17.428 2.62195C17.4541 2.60041 17.4756 2.58166 17.4925 2.56622C17.501 2.5585 17.5084 2.5516 17.5147 2.54561C17.5178 2.54261 17.5207 2.53983 17.5233 2.53729C17.5246 2.53602 17.5259 2.5348 17.527 2.53365C17.5276 2.53307 17.5282 2.53251 17.5287 2.53196C17.529 2.53169 17.5294 2.53129 17.5295 2.53115C17.5299 2.53075 17.5303 2.53036 17 2.00003ZM13 2.25003C11.6645 2.25003 10.5421 1.8091 9.27854 1.30367C8.04212 0.809102 6.66448 0.250031 5 0.250031V1.75003C6.33552 1.75003 7.45788 2.19096 8.72146 2.69639C9.95788 3.19096 11.3355 3.75003 13 3.75003V2.25003ZM5 0.250031C3.41546 0.250031 2.31961 0.51441 1.59646 0.803673C1.23554 0.948039 0.970738 1.09732 0.7871 1.21974C0.695416 1.28087 0.624381 1.33502 0.572048 1.37811C0.545893 1.39965 0.524446 1.4184 0.507458 1.43384C0.498965 1.44157 0.49159 1.44846 0.485302 1.45446C0.482158 1.45745 0.479286 1.46023 0.476682 1.46277C0.47538 1.46405 0.474145 1.46526 0.472976 1.46641C0.472392 1.46699 0.471824 1.46755 0.471273 1.4681C0.470998 1.46838 0.470597 1.46878 0.470459 1.46891C0.470062 1.46931 0.46967 1.4697 1 2.00003C1.53033 2.53036 1.52995 2.53075 1.52956 2.53113C1.52944 2.53125 1.52906 2.53162 1.52882 2.53187C1.52833 2.53235 1.52785 2.53283 1.52739 2.53328C1.52647 2.5342 1.5256 2.53505 1.52479 2.53584C1.52317 2.53742 1.52178 2.53876 1.52062 2.53987C1.5183 2.54208 1.5169 2.54336 1.51647 2.54376C1.51559 2.54455 1.51856 2.54181 1.52561 2.53601C1.53968 2.52442 1.57021 2.50045 1.61915 2.46782C1.71676 2.40274 1.88946 2.30202 2.15354 2.19639C2.68039 1.98565 3.58454 1.75003 5 1.75003V0.250031ZM0.25 2.00003V19H1.75V2.00003H0.25Z"
                    fill="#FF7B42"
                />
            </svg>
        </>
    );
};