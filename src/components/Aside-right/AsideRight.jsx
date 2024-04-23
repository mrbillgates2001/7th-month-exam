import React from "react";
import "./AsideRight.css";
import { profile, union } from "../../assets/images/images";

const AsideRight = () => {
	return (
		<div>
			<div className="aside-right">
				<div className="aside-right-top">
					<div>
						<span>Friend Activity</span>
					</div>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 32 32"
							fill="none">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M11.4165 11.1494C11.4165 8.32115 13.6928 6.75 15.5552 6.75C18.0175 6.75 20.0018 8.72612 20.0018 11.1494C20.0018 12.1948 19.3886 13.6903 18.4846 14.8923C18.0185 15.5121 17.796 16.3324 17.8302 17.0964C17.8643 17.8585 18.1656 18.6949 18.9085 19.1938L22.6582 21.7122C22.7647 21.8051 22.9197 21.993 23.0532 22.2299C23.2024 22.4949 23.2497 22.688 23.2497 22.7539V23.9167H15.5552V25.4167H24.7497V22.7539C24.7497 22.3039 24.5547 21.8393 24.3601 21.4937C24.1582 21.1354 23.8792 20.7687 23.5788 20.5269L23.5536 20.5066L19.7448 17.9486C19.5197 17.7974 19.3492 17.4857 19.3287 17.0293C19.3084 16.5748 19.4486 16.1061 19.6834 15.7939C20.6941 14.45 21.5018 12.6419 21.5018 11.1494C21.5018 7.88483 18.833 5.25 15.5552 5.25C12.9735 5.25 9.9165 7.38767 9.9165 11.1494C9.9165 12.994 10.5304 14.1883 11.1941 15.1293C11.355 15.3575 11.5186 15.5705 11.6697 15.7663L11.702 15.8081L11.7021 15.8082C11.8434 15.9913 11.9714 16.1571 12.0901 16.3225C12.3442 16.677 12.5193 16.9823 12.6133 17.3039L14.0531 16.8833C13.8899 16.3247 13.6032 15.8588 13.3092 15.4486C13.1742 15.2604 13.0303 15.0739 12.8926 14.8956L12.8572 14.8499C12.7059 14.6538 12.5602 14.4637 12.4199 14.2648C11.8788 13.4976 11.4165 12.5999 11.4165 11.1494ZM10.5833 26L10.5833 23.4166H8V21.9166H10.5833L10.5833 19.3333H12.0833L12.0833 21.9166H14.6665V23.4166H12.0833L12.0833 26L10.5833 26Z"
								fill="#B3B3B3"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="56"
							height="56"
							viewBox="0 0 56 56"
							fill="none">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M19.2913 35.2446C18.8893 35.6597 18.9052 36.3171 19.3267 36.713C19.7482 37.1089 20.4158 37.0932 20.8178 36.6781L28 29.2613L35.1821 36.6781C35.5841 37.0932 36.2517 37.1089 36.6732 36.713C37.0948 36.3171 37.1106 35.6597 36.7086 35.2446L29.4573 27.7564L36.2369 20.7553C36.6388 20.3402 36.623 19.6828 36.2015 19.2869C35.7799 18.8911 35.1123 18.9067 34.7104 19.3218L28 26.2514L21.2896 19.3218C20.8876 18.9067 20.22 18.8911 19.7985 19.2869C19.3769 19.6828 19.3611 20.3402 19.7631 20.7554L26.5426 27.7564L19.2913 35.2446Z"
								fill="#B3B3B3"
							/>
						</svg>
					</div>
				</div>

				<div className="aside-right-paragraph">
					<p>
						Let friends and followers on Spotify see what you’re listening to.
					</p>
				</div>

				<div className="profile-unions">
					<div className="profile-union">
						<img src={profile} alt="" />
						<img src={union} alt="" />
					</div>
					<div className="profile-union">
						<img src={profile} alt="" />
						<img src={union} alt="" />
					</div>
					<div className="profile-union">
						<img src={profile} alt="" />
						<img src={union} alt="" />
					</div>
				</div>

				<div className="aside-right-paragraph">
					<p>
						Go to Settings - Social and enable “Share my listening activity on
						Spotify.’ You can turn this off at any time.
					</p>
				</div>

				<div>
					<button>SETTINGS</button>
				</div>
			</div>
		</div>
	);
};

export default AsideRight;
