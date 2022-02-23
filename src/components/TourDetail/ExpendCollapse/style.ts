import styled from "styled-components";

export const StyledExpendComponent = styled.div`
    .wrapperCollapse {
        padding: 1.8rem;
        margin-bottom: 2rem;
        border: 1px solid ${(p) => p.theme.colors.gray3};
        border-radius: 1rem;
    }
    .active {
        background-color: #f4f4f4;
        border: none;
    }
    .collapse__header {
        display: flex;
        justify-content: space-between;
        &-title {
            color: ${(p) => p.theme.colors.darkBlue2};
            font-size: 1.8rem;
            font-weight: ${(p) => p.theme.typography.fontWeightBold};
        }
        &-icon {
            padding-top: 0.5rem;
        }
    }
    .collapse__content {
        padding-top: 2.4rem;
        &-top {
            display: flex;
        }
    }
    .content__text {
        &-title {
            color: ${(p) => p.theme.colors.darkBlue2};
            font-weight: ${(p) => p.theme.typography.fontWeightBold};
        }
    }
`;
