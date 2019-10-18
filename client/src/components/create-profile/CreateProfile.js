import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../../common/TextFieldGroup';
import TextAreaFieldGroup from '../../common/TextAreaFieldGroup';
import SelectListGroup from '../../common/SelectListGroup';
import InputGroup from '../../common/InputGroup';
import { createProfile } from '../../actions/profileActions';
class CreateProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displaySocialInputs: false,  // 添加社交账号：true为展示下面对应的内容， false为不展示。
      handle: '',
      company: '',
      website: '',
      location: '',
      status: '',
      skills: '',
      githubusername: '',
      bio: '',
      wechat: '',
      QQ: '',
      tengxunkt: '',
      wangyikt: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      githubusername: this.state.githubusername,
      bio: this.state.bio,
      wechat: this.state.wechat,
      QQ: this.state.QQ,
      tengxunkt: this.state.tengxunkt,
      wangyikt: this.state.wangyikt,
    };

    // console.log(profileData);

    this.props.createProfile(profileData, this.props.history);

  }

  // 生命周期函数
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      })
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, displaySocialInputs } = this.state;

    let socialInputs;
    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <InputGroup
            placeholder="微信公众号"
            name="wechat"
            icon="fab fa-weixin"
            value={this.state.wechat}
            onChange={this.onChange}
            error={errors.wechat}
          />

          <InputGroup
            placeholder="QQ"
            name="QQ"
            icon="fab fa-qq"
            value={this.state.QQ}
            onChange={this.onChange}
            error={errors.QQ}
          />

          <InputGroup
            placeholder="腾讯课堂网址"
            name="tengxunkt"
            icon="fab fa-wechat"
            value={this.state.tengxunkt}
            onChange={this.onChange}
            error={errors.tengxunkt}
          />

          <InputGroup
            placeholder="网易云课堂网址"
            name="wangyikt"
            icon="fab fa-wechat"
            value={this.state.wangyikt}
            onChange={this.onChange}
            error={errors.wangyikt}
          />
        </div>
      );
    }

    const options = [
      { label: "* 请选择您的职业", value: "* 请选择您的职业" },
      { label: 'Junior Developer', value: '前端初级工程师' },
      { label: 'Senior Developer', value: '前端中级工程师' },
      { label: 'HighDeveloper', value: '前端高级工程师' },
      { label: 'Manager', value: '前端管理' },
      { label: 'backend Developer', value: '后端开发' },
      { label: 'python machine learning', value: 'Python机器学习' },
      { label: 'Other', value: '其他' }
    ];
    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">创建个人信息</h1>
              <p className="lead text-center">填写您的个人资料, 让我们更多的了解你!</p>
              <small className="d-block pb-3">* 表示必填项</small>

              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Profile Handle"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info="此处的handle是在后端接口中需要用来查询数据的, 通常是写你email的名字"
                />

                <SelectListGroup
                  placeholder="Status"
                  name="status"
                  value={this.state.status}
                  onChange={this.onChange}
                  options={options}
                  error={errors.status}
                  info="请告知我们您目前所从事的岗位"
                />

                <TextFieldGroup
                  placeholder="公司"
                  name="company"
                  value={this.state.company}
                  onChange={this.onChange}
                  error={errors.company}
                  info="可以是你自己的公司或者是你的在职公司"
                />
                <TextFieldGroup
                  placeholder="网址"
                  name="website"
                  value={this.state.website}
                  onChange={this.onChange}
                  error={errors.website}
                  info="你公司网址或者是你在职公司网址"
                />
                <TextFieldGroup
                  placeholder="坐标"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                  info="你所在的城市及所在区 (例如. 北京市昌平区)"
                />
                <TextFieldGroup
                  placeholder="* 编程语言技能"
                  name="skills"
                  value={this.state.skills}
                  onChange={this.onChange}
                  error={errors.skills}
                  info="请使用逗号隔开你所掌握的语言 (例如: HTML,CSS,JavaScript,PHP)"
                />
                <TextFieldGroup
                  placeholder="Github 用户名"
                  name="githubusername"
                  value={this.state.githubusername}
                  onChange={this.onChange}
                  error={errors.githubusername}
                  info="如果你希望将你的项目分享给大家, 可以填写你的github用户名"
                />
                <TextAreaFieldGroup
                  placeholder="自我介绍"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  info="简单介绍一下自己"
                />

                <div className="mb-3">
                  <button
                    className="btn btn-light"
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                  >
                    添加社交账号
                  </button>
                  <span className="text-muted">选项</span>
                </div>
                {socialInputs}
                <input type="submit" value="提交" className="btn btn-info btn-block mt-4" />

              </form>

            </div>
          </div>
        </div>
      </div >
    )
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
})

export default connect(mapStateToProps, { createProfile })(withRouter(CreateProfile));