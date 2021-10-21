import { shallowMount, mount } from '@vue/test-utils'
import { expect } from 'chai'
import Login from '@/components/Login.vue'
import Dashboard from '@/components/Dashboard.vue'
import App from '../../src/App.vue'

describe('Login.vue', () => {
  const wrapper = shallowMount(Login);

  it('displays error if email and password are blank', async() => {
    wrapper.find("input[type='button']").trigger("click");
    await wrapper.vm.$nextTick();

    expect(wrapper.text()).contain("Enter your email");
    expect(wrapper.text()).contain("Enter your password");
  })

  it('displays error for invalid email address', async() => {
    wrapper.vm.$data.email = "taditdash@gmail";
    wrapper.find("input[type='button']").trigger("click");
    await wrapper.vm.$nextTick();

    expect(wrapper.text()).contain("Email is not valid");
  })

  it('does not display error for a valid email address', async() => {
    wrapper.vm.$data.email = "taditdash@gmail.com";
    wrapper.find("input[type='button']").trigger("click");
    await wrapper.vm.$nextTick();

    expect(wrapper.text()).not.contain("Email is not valid")
  })

  it('displays error for invalid password (chars length < 6)', async() => {
    wrapper.vm.$data.password = "12345";
    wrapper.find("input[type='button']").trigger("click");
    await wrapper.vm.$nextTick();

    expect(wrapper.text()).contain("Your password should be minimum 6 characters");
  })

  it('does not display error for a valid password (chars length > 6)', () => {
    wrapper.vm.$data.password = "123456";
    wrapper.find("input[type='button']").trigger("click").then(() => {
      expect(wrapper.text()).not.contain("Your password should be minimum 6 characters");
    });
  })

  it('displays error if email and password does not match in the database', async() => {
    wrapper.vm.$data.email = "taditdash@gmail.com";
    wrapper.vm.$data.password = "1234567";
    wrapper.find("input[type='button']").trigger("click");
    await wrapper.vm.$nextTick();

    expect(wrapper.text()).contain("Email or password is not correct");
  })

  it('emits onSuccess event when email and password match in the database', async() => {
    wrapper.vm.$data.email = "taditdash@gmail.com";
    wrapper.vm.$data.password = "123456";
    wrapper.find("input[type='button']").trigger("click");
    await wrapper.vm.$nextTick();
    
    expect(wrapper.emitted().onSuccess).to.be.a('array');
  })

  it('displays dashboard component with a welcome message when email and password match in the database', async() => {
    const appWrapper = mount(App);
    appWrapper.findComponent(Login).vm.$data.email = "taditdash@gmail.com";
    appWrapper.findComponent(Login).vm.$data.password = "123456";
    appWrapper.findComponent(Login).find("input[type='button']").trigger("click");
    await wrapper.vm.$nextTick();

    expect(appWrapper.findComponent(Dashboard).text())
      .contain(`Welcome taditdash@gmail.com`);
  })
})