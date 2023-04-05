package com.dao;

import com.entity.BanlihuiyuanEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.BanlihuiyuanVO;
import com.entity.view.BanlihuiyuanView;


/**
 * 办理会员
 * 
 * @author 
 * @email 
 * @date 2022-05-02 13:22:57
 */
public interface BanlihuiyuanDao extends BaseMapper<BanlihuiyuanEntity> {
	
	List<BanlihuiyuanVO> selectListVO(@Param("ew") Wrapper<BanlihuiyuanEntity> wrapper);
	
	BanlihuiyuanVO selectVO(@Param("ew") Wrapper<BanlihuiyuanEntity> wrapper);
	
	List<BanlihuiyuanView> selectListView(@Param("ew") Wrapper<BanlihuiyuanEntity> wrapper);

	List<BanlihuiyuanView> selectListView(Pagination page,@Param("ew") Wrapper<BanlihuiyuanEntity> wrapper);
	
	BanlihuiyuanView selectView(@Param("ew") Wrapper<BanlihuiyuanEntity> wrapper);
	

}
