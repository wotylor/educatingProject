package com.entity.model;

import com.entity.TuidingxinxiEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.io.Serializable;
 

/**
 * 退订信息
 * 接收传参的实体类  
 *（实际开发中配合移动端接口开发手动去掉些没用的字段， 后端一般用entity就够用了） 
 * 取自ModelAndView 的model名称
 * @author 
 * @email 
 * @date 2022-05-02 13:22:57
 */
public class TuidingxinxiModel  implements Serializable {
	private static final long serialVersionUID = 1L;

	 			
	/**
	 * 民宿名称
	 */
	
	private String minsumingcheng;
		
	/**
	 * 房间类型
	 */
	
	private String fangjianleixing;
		
	/**
	 * 价格
	 */
	
	private Integer jiage;
		
	/**
	 * 会员等级
	 */
	
	private String huiyuandengji;
		
	/**
	 * 折扣
	 */
	
	private Float zhekou;
		
	/**
	 * 入住天数
	 */
	
	private Integer ruzhutianshu;
		
	/**
	 * 租客人数
	 */
	
	private String zukerenshu;
		
	/**
	 * 总价格
	 */
	
	private Float zongjiage;
		
	/**
	 * 退订时间
	 */
		
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 
	private Date tuidingshijian;
		
	/**
	 * 用户账号
	 */
	
	private String yonghuzhanghao;
		
	/**
	 * 用户姓名
	 */
	
	private String yonghuxingming;
		
	/**
	 * 电话号码
	 */
	
	private String dianhuahaoma;
		
	/**
	 * 身份证
	 */
	
	private String shenfenzheng;
		
	/**
	 * 房东账号
	 */
	
	private String fangdongzhanghao;
		
	/**
	 * 房东姓名
	 */
	
	private String fangdongxingming;
		
	/**
	 * 是否审核
	 */
	
	private String sfsh;
		
	/**
	 * 审核回复
	 */
	
	private String shhf;
		
	/**
	 * 是否支付
	 */
	
	private String ispay;
				
	
	/**
	 * 设置：民宿名称
	 */
	 
	public void setMinsumingcheng(String minsumingcheng) {
		this.minsumingcheng = minsumingcheng;
	}
	
	/**
	 * 获取：民宿名称
	 */
	public String getMinsumingcheng() {
		return minsumingcheng;
	}
				
	
	/**
	 * 设置：房间类型
	 */
	 
	public void setFangjianleixing(String fangjianleixing) {
		this.fangjianleixing = fangjianleixing;
	}
	
	/**
	 * 获取：房间类型
	 */
	public String getFangjianleixing() {
		return fangjianleixing;
	}
				
	
	/**
	 * 设置：价格
	 */
	 
	public void setJiage(Integer jiage) {
		this.jiage = jiage;
	}
	
	/**
	 * 获取：价格
	 */
	public Integer getJiage() {
		return jiage;
	}
				
	
	/**
	 * 设置：会员等级
	 */
	 
	public void setHuiyuandengji(String huiyuandengji) {
		this.huiyuandengji = huiyuandengji;
	}
	
	/**
	 * 获取：会员等级
	 */
	public String getHuiyuandengji() {
		return huiyuandengji;
	}
				
	
	/**
	 * 设置：折扣
	 */
	 
	public void setZhekou(Float zhekou) {
		this.zhekou = zhekou;
	}
	
	/**
	 * 获取：折扣
	 */
	public Float getZhekou() {
		return zhekou;
	}
				
	
	/**
	 * 设置：入住天数
	 */
	 
	public void setRuzhutianshu(Integer ruzhutianshu) {
		this.ruzhutianshu = ruzhutianshu;
	}
	
	/**
	 * 获取：入住天数
	 */
	public Integer getRuzhutianshu() {
		return ruzhutianshu;
	}
				
	
	/**
	 * 设置：租客人数
	 */
	 
	public void setZukerenshu(String zukerenshu) {
		this.zukerenshu = zukerenshu;
	}
	
	/**
	 * 获取：租客人数
	 */
	public String getZukerenshu() {
		return zukerenshu;
	}
				
	
	/**
	 * 设置：总价格
	 */
	 
	public void setZongjiage(Float zongjiage) {
		this.zongjiage = zongjiage;
	}
	
	/**
	 * 获取：总价格
	 */
	public Float getZongjiage() {
		return zongjiage;
	}
				
	
	/**
	 * 设置：退订时间
	 */
	 
	public void setTuidingshijian(Date tuidingshijian) {
		this.tuidingshijian = tuidingshijian;
	}
	
	/**
	 * 获取：退订时间
	 */
	public Date getTuidingshijian() {
		return tuidingshijian;
	}
				
	
	/**
	 * 设置：用户账号
	 */
	 
	public void setYonghuzhanghao(String yonghuzhanghao) {
		this.yonghuzhanghao = yonghuzhanghao;
	}
	
	/**
	 * 获取：用户账号
	 */
	public String getYonghuzhanghao() {
		return yonghuzhanghao;
	}
				
	
	/**
	 * 设置：用户姓名
	 */
	 
	public void setYonghuxingming(String yonghuxingming) {
		this.yonghuxingming = yonghuxingming;
	}
	
	/**
	 * 获取：用户姓名
	 */
	public String getYonghuxingming() {
		return yonghuxingming;
	}
				
	
	/**
	 * 设置：电话号码
	 */
	 
	public void setDianhuahaoma(String dianhuahaoma) {
		this.dianhuahaoma = dianhuahaoma;
	}
	
	/**
	 * 获取：电话号码
	 */
	public String getDianhuahaoma() {
		return dianhuahaoma;
	}
				
	
	/**
	 * 设置：身份证
	 */
	 
	public void setShenfenzheng(String shenfenzheng) {
		this.shenfenzheng = shenfenzheng;
	}
	
	/**
	 * 获取：身份证
	 */
	public String getShenfenzheng() {
		return shenfenzheng;
	}
				
	
	/**
	 * 设置：房东账号
	 */
	 
	public void setFangdongzhanghao(String fangdongzhanghao) {
		this.fangdongzhanghao = fangdongzhanghao;
	}
	
	/**
	 * 获取：房东账号
	 */
	public String getFangdongzhanghao() {
		return fangdongzhanghao;
	}
				
	
	/**
	 * 设置：房东姓名
	 */
	 
	public void setFangdongxingming(String fangdongxingming) {
		this.fangdongxingming = fangdongxingming;
	}
	
	/**
	 * 获取：房东姓名
	 */
	public String getFangdongxingming() {
		return fangdongxingming;
	}
				
	
	/**
	 * 设置：是否审核
	 */
	 
	public void setSfsh(String sfsh) {
		this.sfsh = sfsh;
	}
	
	/**
	 * 获取：是否审核
	 */
	public String getSfsh() {
		return sfsh;
	}
				
	
	/**
	 * 设置：审核回复
	 */
	 
	public void setShhf(String shhf) {
		this.shhf = shhf;
	}
	
	/**
	 * 获取：审核回复
	 */
	public String getShhf() {
		return shhf;
	}
				
	
	/**
	 * 设置：是否支付
	 */
	 
	public void setIspay(String ispay) {
		this.ispay = ispay;
	}
	
	/**
	 * 获取：是否支付
	 */
	public String getIspay() {
		return ispay;
	}
			
}
