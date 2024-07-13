import styled from "styled-components";

export const HeaderTop = styled.div`
    padding: 5px 0px;
    background-color: #F0F2F5;

    .header__top--inner {
        display:flex;
        align-items:center;
    
    }
    // Header Top left start

    .header__top--left {
        display: flex;
        align-items:center;
        gap:30px;

        &-btn {
            border:none;
            background: transparent;
            display:flex;
            align-items:center;
            gap: 5px;
        }

        &-description span {
            font-weight:bold;
            text-decoration: underline;
        }
    }

    // Header Top left end

    // 
 
    // Header Top right start
        .header__top--right {
            display:flex;
            align-items:center;
            gap:15px;
            margin-left:auto;

            a {
                transition: color .3s ease ;

                &:hover {
                    color:dimgray;
                    transition: color .3s ease ;
                }
            }

            &-link {
                color:#7C00FF;
            }

            form select  {
                outline:none;
                background: transparent;
                border:none;
                transition: border .3s ease ;

                &:hover {
                    border:1px solid #222;
                    transition: border .3s ease;
                    cursor: pointer;
                }
            }

         
        }
    // Header Top right end
   
`


export const HeaderMid = styled.div`
    padding: 17px 0px;

    .header__mid-wrapper {
        display:flex;
        align-items:center;
    }


    .header__mid--left {
        margin-right: 50px; 
    }


    .header__mid--center {
        display:flex;
        align-items:center;
        gap:10px;

        button {
            border: 1px solid #E5E5FF;
            background: #E5E5FF;
            border-radius: 5px;
            padding: 12px 20px;
            display:flex;
            gap:10px;
            cursor: pointer;
            color: #7F4DFF;
            align-items:center;
            font-size: 16px;
            transition: all .3s ease;

            &:hover {
                transition: all .3s ease;
                background: #CECCFF;
            }

            i {
            font-size: 18px; 
            }
        }

                form  {
                    width: 480px;
                    position: relative;

                    input {
                        width: 100%;
                        padding: 12px 0px 12px 10px;
                        outline: none;
                    }
                        
                    i {
                        position: absolute;
                        top: 0px;    
                        right: -50px;
                        background:#EDEFF2;
                        padding: 14px 28px;
                        color:#4D4F59;
                        border-top-right-radius: 5px;
                        border-bottom-right-radius: 5px;
                    }
                }      
}

    .header__mid--right {
        margin-left:auto;

        &-list {
            display:flex;
            align-items:center;
            gap:30px;
            list-style:none;
        }
        
        &-item a {
            display:flex;
            align-items:center;
            gap:7px;
        }
    }

`
export const Navbar = styled.nav`
    position:relative;
    padding: 0px 0px 50px 0px;

    .navbar__list {
        display:flex;
        align-items:center;
        gap:19px;
        list-style: none;

        li  a {
            display:flex;
            align-items:center;
            gap:5px;

            h5 {
                font-size: 12px;
            }
        }

        &--item-btn {
            outline: none;
            border: none;
            background: transparent;
            display:flex;
            align-items:center;
            gap:5px;
            cursor: pointer;
        }
    }
`