package com.entity.model;

import com.entity.HuiyuandengjiEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.io.Serializable;
 

/**
 * 会员等级
 * 接收传参的实体类  
 *（实际开发中配合移动端接口开发手动去掉些没用的字段， 后端一般用entity就够用了） 
 * 取自ModelAndView 的model名称
 * @author 
 * @email 
 * @date 2022-05-02 13:22:57
 */
public class HuiyuandengjiModel  implements Serializable {
	private static final long serialVersionUID = 1L;

	 			
	/**
	 * 折扣
	 */
	
	private Float zhekou;
		
	/**
	 * 办理费用
	 */
	
	private Integer banlifeiyong;
				
	
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
	 * 设置：办理费用
	 */
	 
	public void setBanlifeiyong(Integer banlifeiyong) {
		this.banlifeiyong = banlifeiyong;
	}
	
	/**
	 * 获取：办理费用
	 */
	public Integer getBanlifeiyong() {
		return banlifeiyong;
	}
			
}
