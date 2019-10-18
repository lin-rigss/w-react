import React, { Component } from 'react'
import isEmpty from '../../validation/is-empty';
import PropTypes from 'prop-types';


class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-info text-white mb-3">
            <div className="row">
              <div className="col-4 col-md-3 m-auto">
                <img
                  className="rounded-circle"
                  src={profile.user.avatar}
                  alt=""
                />
              </div>
            </div>
            <div className="text-center">
              <h1 className="display-4 text-center">{profile.user.name}</h1>
              <p className="lead text-center">
                {profile.status}{' '}
                {isEmpty(profile.company) ? null : (
                  <span>{profile.company}</span>
                )}
              </p>
              {isEmpty(profile.location) ? null : <p>{profile.location}</p>}
              <p>
                {isEmpty(profile.website) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.website}
                    target="_blank"
                  >
                    <i className="fas fa-globe fa-2x" />
                  </a>
                )}

                {isEmpty(profile.social && profile.social.wechat) ? null : (
                  <a
                    className="text-white p-2"
                    // href={profile.social.wechat}
                    target="_blank"
                  >
                    <i className="fab fa-weixin fa-2x" />
                  </a>
                )}

                {isEmpty(profile.social && profile.social.QQ) ? null : (
                  <a
                    className="text-white p-2"
                    // href={profile.social.QQ}
                    target="_blank"
                  >
                    <i className="fab fa-qq fa-2x" />
                  </a>
                )}

                {isEmpty(profile.social && profile.social.tengxunkt) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.tengxunkt}
                    target="_blank"
                  >
                    <i className="fab fa-youtube fa-2x" />
                  </a>
                )}

                {isEmpty(profile.social && profile.social.wangyikt) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.wangyikt}
                    target="_blank"
                  >
                    <i className="fab fa-facebook fa-2x" />
                  </a>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ProfileHeader.propTypes = {
  profile: PropTypes.object.isRequired
};
export default ProfileHeader;