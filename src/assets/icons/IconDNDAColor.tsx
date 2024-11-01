import React from 'react'

interface SvgIconProps {
  className ?: string;
  width ?: number; // Propiedad opcional para el ancho
  height ?: number; // Propiedad opcional para la altura

}

const IconDNDAColor: React.FC<SvgIconProps> = ({ width = '100%', height = '100%', className }) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 107.8 45.6"
      style={{ enableBackground: 'new 0 0 107.8 45.6' } as never}
      preserveAspectRatio="xMidYMid meet" // Mantiene el aspecto
    >
      <style>
        {
          `
          .LogoDNDAColorst0{fill:#FFFFFF;}
.LogoDNDAColorst1{fill:#A71680;}
.LogoDNDAColorst2{fill:#FAB439;}
.LogoDNDAColorst3{fill:#3AAA35;}
.LogoDNDAColorst4{fill:#005CA9;}
.LogoDNDAColorst5{fillRule:evenodd;clipRule:evenodd;fill:#D5DCDF;}
.LogoDNDAColorst6{fill:#1D1D1B;}
.LogoDNDAColorst7{clipPath:url(#SVGID_00000015346107364734155180000013985678619343572108_);}
.LogoDNDAColorst8{fill:#412683;}
.LogoDNDAColorst9{fill:#412884;}
.LogoDNDAColorst10{fill:#402884;}
.LogoDNDAColorst11{fill:#402984;}
.LogoDNDAColorst12{fill:#412984;}
.LogoDNDAColorst13{fill:#412A84;}
.LogoDNDAColorst14{fill:#402B84;}
.LogoDNDAColorst15{fill:#402C84;}
.LogoDNDAColorst16{fill:#412D84;}
.LogoDNDAColorst17{fill:#402D84;}
.LogoDNDAColorst18{fill:#402E84;}
.LogoDNDAColorst19{fill:#402F84;}
.LogoDNDAColorst20{fill:#403084;}
.LogoDNDAColorst21{fill:#403184;}
.LogoDNDAColorst22{fill:#403284;}
.LogoDNDAColorst23{fill:#3F3284;}
.LogoDNDAColorst24{fill:#403384;}
.LogoDNDAColorst25{fill:#403484;}
.LogoDNDAColorst26{fill:#3F3584;}
.LogoDNDAColorst27{fill:#403684;}
.LogoDNDAColorst28{fill:#3F3684;}
.LogoDNDAColorst29{fill:#3F3784;}
.LogoDNDAColorst30{fill:#3F3884;}
.LogoDNDAColorst31{fill:#3E3984;}
.LogoDNDAColorst32{fill:#3F3984;}
.LogoDNDAColorst33{fill:#3F3A84;}
.LogoDNDAColorst34{fill:#3F3B84;}
.LogoDNDAColorst35{fill:#3E3B84;}
.LogoDNDAColorst36{fill:#3F3C84;}
.LogoDNDAColorst37{fill:#3F3D84;}
.LogoDNDAColorst38{fill:#3E3D84;}
.LogoDNDAColorst39{fill:#3E3E84;}
.LogoDNDAColorst40{fill:#3F3F84;}
.LogoDNDAColorst41{fill:#3E4084;}
.LogoDNDAColorst42{fill:#3E4184;}
.LogoDNDAColorst43{fill:#3D4284;}
.LogoDNDAColorst44{fill:#3E4384;}
.LogoDNDAColorst45{fill:#3D4484;}
.LogoDNDAColorst46{fill:#3D4584;}
.LogoDNDAColorst47{fill:#3D4684;}
.LogoDNDAColorst48{fill:#3D4784;}
.LogoDNDAColorst49{fill:#3C4784;}
.LogoDNDAColorst50{fill:#3C4884;}
.LogoDNDAColorst51{fill:#3D4984;}
.LogoDNDAColorst52{fill:#3C4A84;}
.LogoDNDAColorst53{fill:#3C4B84;}
.LogoDNDAColorst54{fill:#3B4C84;}
.LogoDNDAColorst55{fill:#3C4C84;}
.LogoDNDAColorst56{fill:#3C4D84;}
.LogoDNDAColorst57{fill:#3B4D84;}
.LogoDNDAColorst58{fill:#3B4E84;}
.LogoDNDAColorst59{fill:#3B4F84;}
.LogoDNDAColorst60{fill:#3B5083;}
.LogoDNDAColorst61{fill:#3B5183;}
.LogoDNDAColorst62{fill:#3A5183;}
.LogoDNDAColorst63{fill:#3A5283;}
.LogoDNDAColorst64{fill:#3B5383;}
.LogoDNDAColorst65{fill:#3A5383;}
.LogoDNDAColorst66{fill:#3A5483;}
.LogoDNDAColorst67{fill:#395583;}
.LogoDNDAColorst68{fill:#3A5583;}
.LogoDNDAColorst69{fill:#3A5683;}
.LogoDNDAColorst70{fill:#3A5682;}
.LogoDNDAColorst71{fill:#395782;}
.LogoDNDAColorst72{fill:#3A5882;}
.LogoDNDAColorst73{fill:#395982;}
.LogoDNDAColorst74{fill:#395A82;}
.LogoDNDAColorst75{fill:#385A82;}
.LogoDNDAColorst76{fill:#385B82;}
.LogoDNDAColorst77{fill:#395C81;}
.LogoDNDAColorst78{fill:#385D81;}
.LogoDNDAColorst79{fill:#385E81;}
.LogoDNDAColorst80{fill:#395E81;}
.LogoDNDAColorst81{fill:#385F81;}
.LogoDNDAColorst82{fill:#376080;}
.LogoDNDAColorst83{fill:#386180;}
.LogoDNDAColorst84{fill:#376280;}
.LogoDNDAColorst85{fill:#37637F;}
.LogoDNDAColorst86{fill:#36637F;}
.LogoDNDAColorst87{fill:#37647F;}
.LogoDNDAColorst88{fill:#37657F;}
.LogoDNDAColorst89{fill:#36667E;}
.LogoDNDAColorst90{fill:#37677E;}
.LogoDNDAColorst91{fill:#36687E;}
.LogoDNDAColorst92{fill:#36687D;}
.LogoDNDAColorst93{fill:#36697D;}
.LogoDNDAColorst94{fill:#37697D;}
.LogoDNDAColorst95{fill:#366A7D;}
.LogoDNDAColorst96{fill:#366B7C;}
.LogoDNDAColorst97{fill:#356B7C;}
.LogoDNDAColorst98{fill:#356C7C;}
.LogoDNDAColorst99{fill:#366D7C;}
.LogoDNDAColorst100{fill:#366D7B;}
.LogoDNDAColorst101{fill:#356E7B;}
.LogoDNDAColorst102{fill:#356F7B;}
.LogoDNDAColorst103{fill:#366F7B;}
.LogoDNDAColorst104{fill:#35707A;}
.LogoDNDAColorst105{fill:#35717A;}
.LogoDNDAColorst106{fill:#347179;}
.LogoDNDAColorst107{fill:#367279;}
.LogoDNDAColorst108{fill:#357279;}
.LogoDNDAColorst109{fill:#357379;}
.LogoDNDAColorst110{fill:#347378;}
.LogoDNDAColorst111{fill:#347478;}
.LogoDNDAColorst112{fill:#357577;}
.LogoDNDAColorst113{fill:#347677;}
.LogoDNDAColorst114{fill:#347676;}
.LogoDNDAColorst115{fill:#337776;}
.LogoDNDAColorst116{fill:#357776;}
.LogoDNDAColorst117{fill:#347875;}
.LogoDNDAColorst118{fill:#347975;}
.LogoDNDAColorst119{fill:#337974;}
.LogoDNDAColorst120{fill:#357A74;}
.LogoDNDAColorst121{fill:#347A74;}
.LogoDNDAColorst122{fill:#347B73;}
.LogoDNDAColorst123{fill:#337C73;}
.LogoDNDAColorst124{fill:#337C72;}
.LogoDNDAColorst125{fill:#347D72;}
.LogoDNDAColorst126{fill:#347D71;}
.LogoDNDAColorst127{fill:#347E71;}
.LogoDNDAColorst128{fill:#337E71;}
.LogoDNDAColorst129{fill:#337E70;}
.LogoDNDAColorst130{fill:#347F70;}
.LogoDNDAColorst131{fill:#34806F;}
.LogoDNDAColorst132{fill:#33806F;}
.LogoDNDAColorst133{fill:#33816E;}
.LogoDNDAColorst134{fill:#32816E;}
.LogoDNDAColorst135{fill:#34826D;}
.LogoDNDAColorst136{fill:#33836C;}
.LogoDNDAColorst137{fill:#33846B;}
.LogoDNDAColorst138{fill:#34846B;}
.LogoDNDAColorst139{fill:#34856B;}
.LogoDNDAColorst140{fill:#34856A;}
.LogoDNDAColorst141{fill:#33866A;}
.LogoDNDAColorst142{fill:#338669;}
.LogoDNDAColorst143{fill:#348769;}
.LogoDNDAColorst144{fill:#348768;}
.LogoDNDAColorst145{fill:#348868;}
.LogoDNDAColorst146{fill:#338867;}
.LogoDNDAColorst147{fill:#338966;}
.LogoDNDAColorst148{fill:#348966;}
.LogoDNDAColorst149{fill:#348A65;}
.LogoDNDAColorst150{fill:#338B64;}
.LogoDNDAColorst151{fill:#358C63;}
.LogoDNDAColorst152{fill:#348C63;}
.LogoDNDAColorst153{fill:#348D62;}
.LogoDNDAColorst154{fill:#348D61;}
.LogoDNDAColorst155{fill:#358E61;}
.LogoDNDAColorst156{fill:#358E60;}
.LogoDNDAColorst157{fill:#358F5F;}
.LogoDNDAColorst158{fill:#348F5F;}
.LogoDNDAColorst159{fill:#34905E;}
.LogoDNDAColorst160{fill:#35915D;}
.LogoDNDAColorst161{fill:#35925C;}
.LogoDNDAColorst162{fill:#35925B;}
.LogoDNDAColorst163{fill:#34925B;}
.LogoDNDAColorst164{fill:#36935A;}
.LogoDNDAColorst165{fill:#369459;}
.LogoDNDAColorst166{fill:#359458;}
.LogoDNDAColorst167{fill:#359558;}
.LogoDNDAColorst168{fill:#379557;}
.LogoDNDAColorst169{fill:#369657;}
.LogoDNDAColorst170{fill:#369656;}
.LogoDNDAColorst171{fill:#369655;}
.LogoDNDAColorst172{fill:#369755;}
.LogoDNDAColorst173{fill:#359754;}
.LogoDNDAColorst174{fill:#379854;}
.LogoDNDAColorst175{fill:#379853;}
.LogoDNDAColorst176{fill:#379952;}
.LogoDNDAColorst177{fill:#369952;}
.LogoDNDAColorst178{fill:#369951;}
.LogoDNDAColorst179{fill:#389A50;}
.LogoDNDAColorst180{fill:#379B4F;}
.LogoDNDAColorst181{fill:#379C4E;}
.LogoDNDAColorst182{fill:#399C4D;}
.LogoDNDAColorst183{fill:#389D4D;}
.LogoDNDAColorst184{fill:#389D4C;}
.LogoDNDAColorst185{fill:#389D4B;}
.LogoDNDAColorst186{fill:#379E4B;}
.LogoDNDAColorst187{fill:#379E4A;}
.LogoDNDAColorst188{fill:#399F49;}
.LogoDNDAColorst189{fill:#38A048;}
.LogoDNDAColorst190{fill:#38A047;}
.LogoDNDAColorst191{fill:#3AA146;}
.LogoDNDAColorst192{fill:#39A145;}
.LogoDNDAColorst193{fill:#39A245;}
.LogoDNDAColorst194{fill:#39A244;}
.LogoDNDAColorst195{fill:#39A343;}
.LogoDNDAColorst196{fill:#3AA343;}
.LogoDNDAColorst197{fill:#3AA442;}
.LogoDNDAColorst198{fill:#3AA441;}
.LogoDNDAColorst199{fill:#39A540;}
.LogoDNDAColorst200{fill:#39A53F;}
.LogoDNDAColorst201{fill:#3BA63E;}
.LogoDNDAColorst202{fill:#3AA73D;}
.LogoDNDAColorst203{fill:#3AA73C;}
.LogoDNDAColorst204{fill:#3AA83B;}
.LogoDNDAColorst205{fill:#3CA83A;}
.LogoDNDAColorst206{fill:#3BA93A;}
.LogoDNDAColorst207{fill:#3BA939;}
.LogoDNDAColorst208{fill:#3BA938;}
.LogoDNDAColorst209{fill:#3BAA37;}
.LogoDNDAColorst210{fill:#3FAB35;}
.LogoDNDAColorst211{fill:#41AB34;}
.LogoDNDAColorst212{fill:#42AB34;}
.LogoDNDAColorst213{fill:#44AC34;}
.LogoDNDAColorst214{fill:#46AC34;}
.LogoDNDAColorst215{fill:#48AC33;}
.LogoDNDAColorst216{fill:#4AAD33;}
.LogoDNDAColorst217{fill:#4CAD33;}
.LogoDNDAColorst218{fill:#4DAD33;}
.LogoDNDAColorst219{fill:#4FAD33;}
.LogoDNDAColorst220{fill:#51AE32;}
.LogoDNDAColorst221{fill:#52AE32;}
.LogoDNDAColorst222{fill:#54AE32;}
.LogoDNDAColorst223{fill:#56AF31;}
.LogoDNDAColorst224{fill:#57AF31;}
.LogoDNDAColorst225{fill:#59AF33;}
.LogoDNDAColorst226{fill:#5AB033;}
.LogoDNDAColorst227{fill:#5CB032;}
.LogoDNDAColorst228{fill:#5DB032;}
.LogoDNDAColorst229{fill:#5FB132;}
.LogoDNDAColorst230{fill:#60B132;}
.LogoDNDAColorst231{fill:#62B131;}
.LogoDNDAColorst232{fill:#63B131;}
.LogoDNDAColorst233{fill:#65B231;}
.LogoDNDAColorst234{fill:#66B230;}
.LogoDNDAColorst235{fill:#68B230;}
.LogoDNDAColorst236{fill:#69B330;}
.LogoDNDAColorst237{fill:#6AB330;}
.LogoDNDAColorst238{fill:#6CB32F;}
.LogoDNDAColorst239{fill:#6DB330;}
.LogoDNDAColorst240{fill:#6EB430;}
.LogoDNDAColorst241{fill:#70B430;}
.LogoDNDAColorst242{fill:#71B42F;}
.LogoDNDAColorst243{fill:#72B52F;}
.LogoDNDAColorst244{fill:#74B52F;}
.LogoDNDAColorst245{fill:#75B52E;}
.LogoDNDAColorst246{fill:#76B62E;}
.LogoDNDAColorst247{fill:#78B62E;}
.LogoDNDAColorst248{fill:#79B62D;}
.LogoDNDAColorst249{fill:#7AB72D;}
.LogoDNDAColorst250{fill:#7BB72D;}
.LogoDNDAColorst251{fill:#7DB72C;}
.LogoDNDAColorst252{fill:#7EB82C;}
.LogoDNDAColorst253{fill:#7FB82C;}
.LogoDNDAColorst254{fill:#80B82C;}
.LogoDNDAColorst255{fill:#82B82C;}
.LogoDNDAColorst256{fill:#83B92C;}
.LogoDNDAColorst257{fill:#84B92B;}
.LogoDNDAColorst258{fill:#85B92B;}
.LogoDNDAColorst259{fill:#87BA2B;}
.LogoDNDAColorst260{fill:#88BA2A;}
.LogoDNDAColorst261{fill:#89BB2A;}
.LogoDNDAColorst262{fill:#8ABA2A;}
.LogoDNDAColorst263{fill:#8BBB29;}
.LogoDNDAColorst264{fill:#8CBB29;}
.LogoDNDAColorst265{fill:#8EBC29;}
.LogoDNDAColorst266{fill:#8FBC28;}
.LogoDNDAColorst267{fill:#90BC28;}
.LogoDNDAColorst268{fill:#91BD27;}
.LogoDNDAColorst269{fill:#92BC27;}
.LogoDNDAColorst270{fill:#93BD28;}
.LogoDNDAColorst271{fill:#94BD28;}
.LogoDNDAColorst272{fill:#95BE27;}
.LogoDNDAColorst273{fill:#96BE27;}
.LogoDNDAColorst274{fill:#97BE26;}
.LogoDNDAColorst275{fill:#98BF26;}
.LogoDNDAColorst276{fill:#99BF26;}
.LogoDNDAColorst277{fill:#9ABF25;}
.LogoDNDAColorst278{fill:#9CBF25;}
.LogoDNDAColorst279{fill:#9DC025;}
.LogoDNDAColorst280{fill:#9EC024;}
.LogoDNDAColorst281{fill:#9FC024;}
.LogoDNDAColorst282{fill:#A0C123;}
.LogoDNDAColorst283{fill:#A1C123;}
.LogoDNDAColorst284{fill:#A2C122;}
.LogoDNDAColorst285{fill:#A3C124;}
.LogoDNDAColorst286{fill:#A4C123;}
.LogoDNDAColorst287{fill:#A5C223;}
.LogoDNDAColorst288{fill:#A6C222;}
.LogoDNDAColorst289{fill:#A7C222;}
.LogoDNDAColorst290{fill:#A8C321;}
.LogoDNDAColorst291{fill:#A9C321;}
.LogoDNDAColorst292{fill:#AAC321;}
.LogoDNDAColorst293{fill:#ABC320;}
.LogoDNDAColorst294{fill:#ABC420;}
.LogoDNDAColorst295{fill:#ACC41F;}
.LogoDNDAColorst296{fill:#ADC41F;}
.LogoDNDAColorst297{fill:#AEC51E;}
.LogoDNDAColorst298{fill:#AFC51D;}
.LogoDNDAColorst299{fill:#B0C51F;}
.LogoDNDAColorst300{fill:#B1C51E;}
.LogoDNDAColorst301{fill:#B2C61E;}
.LogoDNDAColorst302{fill:#B3C61D;}
.LogoDNDAColorst303{fill:#B4C61D;}
.LogoDNDAColorst304{fill:#B5C71C;}
.LogoDNDAColorst305{fill:#B6C71C;}
.LogoDNDAColorst306{fill:#B7C71B;}
.LogoDNDAColorst307{fill:#B8C71B;}
.LogoDNDAColorst308{fill:#B9C81A;}
.LogoDNDAColorst309{fill:#BAC819;}
.LogoDNDAColorst310{fill:#BBC819;}
.LogoDNDAColorst311{fill:#BCC918;}
.LogoDNDAColorst312{fill:#BDC917;}
.LogoDNDAColorst313{fill:#BEC919;}
.LogoDNDAColorst314{fill:#BFC918;}
.LogoDNDAColorst315{fill:#C0CA17;}
.LogoDNDAColorst316{fill:#C1CA17;}
.LogoDNDAColorst317{fill:#C2CA16;}
.LogoDNDAColorst318{fill:#C3CB15;}
.LogoDNDAColorst319{fill:#C4CB14;}
.LogoDNDAColorst320{fill:#C5CB14;}
.LogoDNDAColorst321{fill:#C6CB13;}
.LogoDNDAColorst322{fill:#C7CC12;}
.LogoDNDAColorst323{fill:#C8CC11;}
.LogoDNDAColorst324{fill:#C9CD10;}
.LogoDNDAColorst325{fill:#CACD0F;}
.LogoDNDAColorst326{fill:#CBCD0E;}
.LogoDNDAColorst327{fill:#CCCD0D;}
.LogoDNDAColorst328{fill:#CDCD10;}
.LogoDNDAColorst329{fill:#CDCE0F;}
.LogoDNDAColorst330{fill:#CECE0E;}
.LogoDNDAColorst331{fill:#CFCE0D;}
.LogoDNDAColorst332{fill:#D0CF0C;}
.LogoDNDAColorst333{fill:#D1CF0A;}
.LogoDNDAColorst334{fill:#D2CF09;}
.LogoDNDAColorst335{fill:#D3CF07;}
.LogoDNDAColorst336{fill:#D4D006;}
.LogoDNDAColorst337{fill:#D5D005;}
.LogoDNDAColorst338{fill:#D6D004;}
.LogoDNDAColorst339{fill:#D7D103;}
.LogoDNDAColorst340{fill:#D7D102;}
.LogoDNDAColorst341{fill:#D8D101;}
.LogoDNDAColorst342{fill:#D9D104;}
.LogoDNDAColorst343{fill:#DAD103;}
.LogoDNDAColorst344{fill:#DAD202;}
.LogoDNDAColorst345{fill:#DBD201;}
.LogoDNDAColorst346{fill:#DCD200;}
.LogoDNDAColorst347{fill:#DDD300;}
.LogoDNDAColorst348{fill:#DED300;}
.LogoDNDAColorst349{fill:#DFD300;}
.LogoDNDAColorst350{fill:#E0D300;}
.LogoDNDAColorst351{fill:#E1D400;}
.LogoDNDAColorst352{fill:#E2D400;}
.LogoDNDAColorst353{fill:#E3D500;}
.LogoDNDAColorst354{fill:#E4D400;}
.LogoDNDAColorst355{fill:#E5D500;}
.LogoDNDAColorst356{fill:#E6D500;}
.LogoDNDAColorst357{fill:#E7D600;}
.LogoDNDAColorst358{fill:#E8D600;}
.LogoDNDAColorst359{fill:#E9D600;}
.LogoDNDAColorst360{fill:#EAD700;}
.LogoDNDAColorst361{fill:#EAD600;}
.LogoDNDAColorst362{fill:#EBD700;}
.LogoDNDAColorst363{fill:#ECD700;}
.LogoDNDAColorst364{fill:#EDD800;}
.LogoDNDAColorst365{fill:#EED800;}
.LogoDNDAColorst366{fill:#EFD800;}
.LogoDNDAColorst367{fill:#F0D800;}
.LogoDNDAColorst368{fill:#F1D900;}
.LogoDNDAColorst369{fill:#F3D900;}
.LogoDNDAColorst370{fill:#F4DA00;}
.LogoDNDAColorst371{fill:#F6DA00;}
.LogoDNDAColorst372{fill:#F7DA00;}
.LogoDNDAColorst373{fill:#F8DB00;}
.LogoDNDAColorst374{fill:#F9DB00;}
.LogoDNDAColorst375{fill:#FADC00;}
.LogoDNDAColorst376{fill:#FADB00;}
.LogoDNDAColorst377{fill:#FBDB00;}
.LogoDNDAColorst378{fill:#FCDC00;}
.LogoDNDAColorst379{fill:#FDDC00;}
.LogoDNDAColorst380{fill:#FEDD00;}
.LogoDNDAColorst381{fill:#FFDD00;}
.LogoDNDAColorst382{fill:#FFDE00;}
.LogoDNDAColorst383{fill:#FFDC00;}
.LogoDNDAColorst384{fill:#FFDB00;}
.LogoDNDAColorst385{fill:#FFDA00;}
.LogoDNDAColorst386{fill:#FFD900;}
.LogoDNDAColorst387{fill:#FFD800;}
.LogoDNDAColorst388{fill:#FFD700;}
.LogoDNDAColorst389{fill:#FFD600;}
.LogoDNDAColorst390{fill:#FFD500;}
.LogoDNDAColorst391{fill:#FFD400;}
.LogoDNDAColorst392{fill:#FFD300;}
.LogoDNDAColorst393{fill:#FFD200;}
.LogoDNDAColorst394{fill:#FFD100;}
.LogoDNDAColorst395{fill:#FFD000;}
.LogoDNDAColorst396{fill:#FFCF00;}
.LogoDNDAColorst397{fill:#FFCE00;}
.LogoDNDAColorst398{fill:#FFCD00;}
.LogoDNDAColorst399{fill:#FFCC00;}
.LogoDNDAColorst400{fill:#FFCB00;}
.LogoDNDAColorst401{fill:#FECA00;}
.LogoDNDAColorst402{fill:#FEC900;}
.LogoDNDAColorst403{fill:#FEC800;}
.LogoDNDAColorst404{fill:#FEC700;}
.LogoDNDAColorst405{fill:#FEC600;}
.LogoDNDAColorst406{fill:#FDC600;}
.LogoDNDAColorst407{fill:#FDC500;}
.LogoDNDAColorst408{fill:#FDC400;}
.LogoDNDAColorst409{fill:#FDC300;}
.LogoDNDAColorst410{fill:#FDC200;}
.LogoDNDAColorst411{fill:#FDC100;}
.LogoDNDAColorst412{fill:#FCC100;}
.LogoDNDAColorst413{fill:#FCC000;}
.LogoDNDAColorst414{fill:#FCBF00;}
.LogoDNDAColorst415{fill:#FCBE00;}
.LogoDNDAColorst416{fill:#FCBD00;}
.LogoDNDAColorst417{fill:#FCBC00;}
.LogoDNDAColorst418{fill:#FBBC00;}
.LogoDNDAColorst419{fill:#FBBB00;}
.LogoDNDAColorst420{fill:#FBBA00;}
.LogoDNDAColorst421{fill:#FBB900;}
.LogoDNDAColorst422{fill:#FBB800;}
.LogoDNDAColorst423{fill:#FBB700;}
.LogoDNDAColorst424{fill:#FAB601;}
.LogoDNDAColorst425{fill:#FAB502;}
.LogoDNDAColorst426{fill:#FAB402;}
.LogoDNDAColorst427{fill:#FAB403;}
.LogoDNDAColorst428{fill:#FAB303;}
.LogoDNDAColorst429{fill:#F9B204;}
.LogoDNDAColorst430{fill:#F9B105;}
.LogoDNDAColorst431{fill:#F9B006;}
.LogoDNDAColorst432{fill:#F9AF06;}
.LogoDNDAColorst433{fill:#F9AE07;}
.LogoDNDAColorst434{fill:#F9AD07;}
.LogoDNDAColorst435{fill:#F8AD08;}
.LogoDNDAColorst436{fill:#F8AC08;}
.LogoDNDAColorst437{fill:#F8AB09;}
.LogoDNDAColorst438{fill:#F8AA09;}
.LogoDNDAColorst439{fill:#F8AA0A;}
.LogoDNDAColorst440{fill:#F8A90A;}
.LogoDNDAColorst441{fill:#F7A80A;}
.LogoDNDAColorst442{fill:#F7A70B;}
.LogoDNDAColorst443{fill:#F7A60C;}
.LogoDNDAColorst444{fill:#F7A50C;}
.LogoDNDAColorst445{fill:#F7A40D;}
.LogoDNDAColorst446{fill:#F6A30D;}
.LogoDNDAColorst447{fill:#F6A20D;}
.LogoDNDAColorst448{fill:#F6A20E;}
.LogoDNDAColorst449{fill:#F6A10E;}
.LogoDNDAColorst450{fill:#F6A00F;}
.LogoDNDAColorst451{fill:#F69F0F;}
.LogoDNDAColorst452{fill:#F59E0F;}
.LogoDNDAColorst453{fill:#F59D10;}
.LogoDNDAColorst454{fill:#F59C10;}
.LogoDNDAColorst455{fill:#F59B10;}
.LogoDNDAColorst456{fill:#F59B11;}
.LogoDNDAColorst457{fill:#F59A11;}
.LogoDNDAColorst458{fill:#F49911;}
.LogoDNDAColorst459{fill:#F49811;}
.LogoDNDAColorst460{fill:#F49712;}
.LogoDNDAColorst461{fill:#F49612;}
.LogoDNDAColorst462{fill:#F49512;}
.LogoDNDAColorst463{fill:#F49413;}
.LogoDNDAColorst464{fill:#F39313;}
.LogoDNDAColorst465{fill:#F39213;}
.LogoDNDAColorst466{fill:#F39114;}
.LogoDNDAColorst467{fill:#F39014;}
.LogoDNDAColorst468{fill:#F38F14;}
.LogoDNDAColorst469{fill:#F28E14;}
.LogoDNDAColorst470{fill:#F28D15;}
.LogoDNDAColorst471{fill:#F28C15;}
.LogoDNDAColorst472{fill:#F28B15;}
.LogoDNDAColorst473{fill:#F28A15;}
.LogoDNDAColorst474{fill:#F28915;}
.LogoDNDAColorst475{fill:#F18916;}
.LogoDNDAColorst476{fill:#F18816;}
.LogoDNDAColorst477{fill:#F18716;}
.LogoDNDAColorst478{fill:#F18616;}
.LogoDNDAColorst479{fill:#F18516;}
.LogoDNDAColorst480{fill:#F18416;}
.LogoDNDAColorst481{fill:#F08317;}
.LogoDNDAColorst482{fill:#F08217;}
.LogoDNDAColorst483{fill:#F08117;}
.LogoDNDAColorst484{fill:#F08017;}
.LogoDNDAColorst485{fill:#F07F17;}
.LogoDNDAColorst486{fill:#F07E17;}
.LogoDNDAColorst487{fill:#EF7D18;}
.LogoDNDAColorst488{fill:#EF7C18;}
.LogoDNDAColorst489{fill:#EF7B18;}
.LogoDNDAColorst490{fill:#EF7A18;}
.LogoDNDAColorst491{fill:#EF7918;}
.LogoDNDAColorst492{fill:#EF7818;}
.LogoDNDAColorst493{fill:#EF7718;}
.LogoDNDAColorst494{fill:#EE7618;}
.LogoDNDAColorst495{fill:#EE7519;}
.LogoDNDAColorst496{fill:#EE7419;}
.LogoDNDAColorst497{fill:#EE7319;}
.LogoDNDAColorst498{fill:#EE7219;}
.LogoDNDAColorst499{fill:#EE7119;}
.LogoDNDAColorst500{fill:#EE7019;}
.LogoDNDAColorst501{fill:#ED6F19;}
.LogoDNDAColorst502{fill:#ED6E19;}
.LogoDNDAColorst503{fill:#ED6D19;}
.LogoDNDAColorst504{fill:#ED6C1A;}
.LogoDNDAColorst505{fill:#ED6B1A;}
.LogoDNDAColorst506{fill:#ED6A1A;}
.LogoDNDAColorst507{fill:#EC691A;}
.LogoDNDAColorst508{fill:#EC681A;}
.LogoDNDAColorst509{fill:#EC671A;}
.LogoDNDAColorst510{fill:#EC661A;}
.LogoDNDAColorst511{fill:#EC651A;}
.LogoDNDAColorst512{fill:#EC641A;}
.LogoDNDAColorst513{fill:#EC631A;}
.LogoDNDAColorst514{fill:#EC621A;}
.LogoDNDAColorst515{fill:#EB621A;}
.LogoDNDAColorst516{fill:#EB611A;}
.LogoDNDAColorst517{fill:#EB601B;}
.LogoDNDAColorst518{fill:#EB5F1B;}
.LogoDNDAColorst519{fill:#EB5E1B;}
.LogoDNDAColorst520{fill:#EB5D1B;}
.LogoDNDAColorst521{fill:#EB5C1B;}
.LogoDNDAColorst522{fill:#EA5B1B;}
.LogoDNDAColorst523{fill:#EA5A1B;}
.LogoDNDAColorst524{fill:#EA591B;}
.LogoDNDAColorst525{fill:#EA581B;}
.LogoDNDAColorst526{fill:#EA571B;}
.LogoDNDAColorst527{fill:#EA561B;}
.LogoDNDAColorst528{fill:#EA551B;}
.LogoDNDAColorst529{fill:#E9541B;}
.LogoDNDAColorst530{fill:#E9531B;}
.LogoDNDAColorst531{fill:#E9521B;}
.LogoDNDAColorst532{fill:#E9511B;}
.LogoDNDAColorst533{fill:#E9501B;}
.LogoDNDAColorst534{fill:#E94F1B;}
.LogoDNDAColorst535{fill:#E94E1C;}
.LogoDNDAColorst536{fill:#E84E1D;}
.LogoDNDAColorst537{fill:#E84E1E;}
.LogoDNDAColorst538{fill:#E74E1F;}
.LogoDNDAColorst539{fill:#E74E20;}
.LogoDNDAColorst540{fill:#E64D20;}
.LogoDNDAColorst541{fill:#E64D21;}
.LogoDNDAColorst542{fill:#E54D22;}
.LogoDNDAColorst543{fill:#E54D23;}
.LogoDNDAColorst544{fill:#E54D24;}
.LogoDNDAColorst545{fill:#E44C24;}
.LogoDNDAColorst546{fill:#E34C25;}
.LogoDNDAColorst547{fill:#E34C26;}
.LogoDNDAColorst548{fill:#E24C27;}
.LogoDNDAColorst549{fill:#E24B28;}
.LogoDNDAColorst550{fill:#E14B29;}
.LogoDNDAColorst551{fill:#E04B29;}
.LogoDNDAColorst552{fill:#E04B2A;}
.LogoDNDAColorst553{fill:#E04A2B;}
.LogoDNDAColorst554{fill:#DF4A2B;}
.LogoDNDAColorst555{fill:#DE4A2C;}
.LogoDNDAColorst556{fill:#DE4A2D;}
.LogoDNDAColorst557{fill:#DD4A2E;}
.LogoDNDAColorst558{fill:#DD492E;}
.LogoDNDAColorst559{fill:#DD492F;}
.LogoDNDAColorst560{fill:#DC492F;}
.LogoDNDAColorst561{fill:#DB4930;}
.LogoDNDAColorst562{fill:#DB4931;}
.LogoDNDAColorst563{fill:#DB4831;}
.LogoDNDAColorst564{fill:#DA4832;}
.LogoDNDAColorst565{fill:#D94833;}
.LogoDNDAColorst566{fill:#D94834;}
.LogoDNDAColorst567{fill:#D84734;}
.LogoDNDAColorst568{fill:#D84735;}
.LogoDNDAColorst569{fill:#D74736;}
.LogoDNDAColorst570{fill:#D64736;}
.LogoDNDAColorst571{fill:#D64737;}
.LogoDNDAColorst572{fill:#D54739;}
.LogoDNDAColorst573{fill:#D4473A;}
.LogoDNDAColorst574{fill:#D4463A;}
.LogoDNDAColorst575{fill:#D3463B;}
.LogoDNDAColorst576{fill:#D3463C;}
.LogoDNDAColorst577{fill:#D2463C;}
.LogoDNDAColorst578{fill:#D2463D;}
.LogoDNDAColorst579{fill:#D2453D;}
.LogoDNDAColorst580{fill:#D1453E;}
.LogoDNDAColorst581{fill:#D0453E;}
.LogoDNDAColorst582{fill:#D0453F;}
.LogoDNDAColorst583{fill:#CF443F;}
.LogoDNDAColorst584{fill:#CF4440;}
.LogoDNDAColorst585{fill:#CE4441;}
.LogoDNDAColorst586{fill:#CD4442;}
.LogoDNDAColorst587{fill:#CC4342;}
.LogoDNDAColorst588{fill:#CC4343;}
.LogoDNDAColorst589{fill:#CB4344;}
.LogoDNDAColorst590{fill:#CA4344;}
.LogoDNDAColorst591{fill:#CA4245;}
.LogoDNDAColorst592{fill:#C94246;}
.LogoDNDAColorst593{fill:#C84247;}
.LogoDNDAColorst594{fill:#C84147;}
.LogoDNDAColorst595{fill:#C74148;}
.LogoDNDAColorst596{fill:#C64149;}
.LogoDNDAColorst597{fill:#C54049;}
.LogoDNDAColorst598{fill:#C5404A;}
.LogoDNDAColorst599{fill:#C4404B;}
.LogoDNDAColorst600{fill:#C33F4C;}
.LogoDNDAColorst601{fill:#C23F4D;}
.LogoDNDAColorst602{fill:#C1404E;}
.LogoDNDAColorst603{fill:#C03F4E;}
.LogoDNDAColorst604{fill:#C03F4F;}
.LogoDNDAColorst605{fill:#BF3F4F;}
.LogoDNDAColorst606{fill:#BF3F50;}
.LogoDNDAColorst607{fill:#BE3E50;}
.LogoDNDAColorst608{fill:#BE3E51;}
.LogoDNDAColorst609{fill:#BD3E51;}
.LogoDNDAColorst610{fill:#BD3E52;}
.LogoDNDAColorst611{fill:#BC3D52;}
.LogoDNDAColorst612{fill:#BC3D53;}
.LogoDNDAColorst613{fill:#BB3D53;}
.LogoDNDAColorst614{fill:#BB3D54;}
.LogoDNDAColorst615{fill:#BA3D54;}
.LogoDNDAColorst616{fill:#B93C54;}
.LogoDNDAColorst617{fill:#B93C55;}
.LogoDNDAColorst618{fill:#B83C56;}
.LogoDNDAColorst619{fill:#B73C56;}
.LogoDNDAColorst620{fill:#B63C57;}
.LogoDNDAColorst621{fill:#B73C57;}
.LogoDNDAColorst622{fill:#B53C58;}
.LogoDNDAColorst623{fill:#B43B58;}
.LogoDNDAColorst624{fill:#B43B59;}
.LogoDNDAColorst625{fill:#B33B59;}
.LogoDNDAColorst626{fill:#B23B5A;}
.LogoDNDAColorst627{fill:#B23A5A;}
.LogoDNDAColorst628{fill:#B13A5B;}
.LogoDNDAColorst629{fill:#B03A5B;}
.LogoDNDAColorst630{fill:#B03A5C;}
.LogoDNDAColorst631{fill:#AF395C;}
.LogoDNDAColorst632{fill:#AE395C;}
.LogoDNDAColorst633{fill:#AE395D;}
.LogoDNDAColorst634{fill:#AD395E;}
.LogoDNDAColorst635{fill:#AC385E;}
.LogoDNDAColorst636{fill:#AC385F;}
.LogoDNDAColorst637{fill:#AB385F;}
.LogoDNDAColorst638{fill:#AA385F;}
.LogoDNDAColorst639{fill:#AA3860;}
.LogoDNDAColorst640{fill:#AA3760;}
.LogoDNDAColorst641{fill:#A93861;}
.LogoDNDAColorst642{fill:#A83761;}
.LogoDNDAColorst643{fill:#A73762;}
.LogoDNDAColorst644{fill:#A63762;}
.LogoDNDAColorst645{fill:#A53763;}
.LogoDNDAColorst646{fill:#A53663;}
.LogoDNDAColorst647{fill:#A43663;}
.LogoDNDAColorst648{fill:#A43664;}
.LogoDNDAColorst649{fill:#A33664;}
.LogoDNDAColorst650{fill:#A33665;}
.LogoDNDAColorst651{fill:#A23565;}
.LogoDNDAColorst652{fill:#A13565;}
.LogoDNDAColorst653{fill:#A13566;}
.LogoDNDAColorst654{fill:#A03466;}
.LogoDNDAColorst655{fill:#9F3467;}
.LogoDNDAColorst656{fill:#9F3468;}
.LogoDNDAColorst657{fill:#9E3468;}
.LogoDNDAColorst658{fill:#9D3468;}
.LogoDNDAColorst659{fill:#9C3469;}
.LogoDNDAColorst660{fill:#9B346A;}
.LogoDNDAColorst661{fill:#9A336A;}
.LogoDNDAColorst662{fill:#9A336B;}
.LogoDNDAColorst663{fill:#99336B;}
.LogoDNDAColorst664{fill:#98326B;}
.LogoDNDAColorst665{fill:#98326C;}
.LogoDNDAColorst666{fill:#97326C;}
.LogoDNDAColorst667{fill:#96326D;}
.LogoDNDAColorst668{fill:#96316D;}
.LogoDNDAColorst669{fill:#95316D;}
.LogoDNDAColorst670{fill:#94316E;}
.LogoDNDAColorst671{fill:#93316E;}
.LogoDNDAColorst672{fill:#92316F;}
.LogoDNDAColorst673{fill:#91316F;}
.LogoDNDAColorst674{fill:#913170;}
.LogoDNDAColorst675{fill:#903070;}
.LogoDNDAColorst676{fill:#8F3070;}
.LogoDNDAColorst677{fill:#8E3071;}
.LogoDNDAColorst678{fill:#8F3071;}
.LogoDNDAColorst679{fill:#8E2F71;}
.LogoDNDAColorst680{fill:#8D2F72;}
.LogoDNDAColorst681{fill:#8C2F72;}
.LogoDNDAColorst682{fill:#8B2F72;}
.LogoDNDAColorst683{fill:#8C2F73;}
.LogoDNDAColorst684{fill:#8B2E73;}
.LogoDNDAColorst685{fill:#8A2E73;}
.LogoDNDAColorst686{fill:#892E74;}
.LogoDNDAColorst687{fill:#882E74;}
.LogoDNDAColorst688{fill:#872E75;}
.LogoDNDAColorst689{fill:#862E75;}
.LogoDNDAColorst690{fill:#862E76;}
.LogoDNDAColorst691{fill:#852E76;}
.LogoDNDAColorst692{fill:#852D76;}
.LogoDNDAColorst693{fill:#842D76;}
.LogoDNDAColorst694{fill:#832D77;}
.LogoDNDAColorst695{fill:#822C77;}
.LogoDNDAColorst696{fill:#812C78;}
.LogoDNDAColorst697{fill:#802C78;}
.LogoDNDAColorst698{fill:#7F2B78;}
.LogoDNDAColorst699{fill:#7F2B79;}
.LogoDNDAColorst700{fill:#7E2B79;}
.LogoDNDAColorst701{fill:#7D2B79;}
.LogoDNDAColorst702{fill:#7D2B7A;}
.LogoDNDAColorst703{fill:#7D2A7A;}
.LogoDNDAColorst704{fill:#7C2B7A;}
.LogoDNDAColorst705{fill:#7B2B7A;}
.LogoDNDAColorst706{fill:#7A2B7B;}
.LogoDNDAColorst707{fill:#7A2A7B;}
.LogoDNDAColorst708{fill:#792A7B;}
.LogoDNDAColorst709{fill:#782A7C;}
.LogoDNDAColorst710{fill:#77297C;}
.LogoDNDAColorst711{fill:#76297D;}
.LogoDNDAColorst712{fill:#75297D;}
.LogoDNDAColorst713{fill:#74287D;}
.LogoDNDAColorst714{fill:#74287E;}
.LogoDNDAColorst715{fill:#73287E;}
.LogoDNDAColorst716{fill:#72287E;}
.LogoDNDAColorst717{fill:#72287F;}
.LogoDNDAColorst718{fill:#71277F;}
.LogoDNDAColorst719{fill:#70277F;}
.LogoDNDAColorst720{fill:#6F2780;}
.LogoDNDAColorst721{fill:#6F2680;}
.LogoDNDAColorst722{fill:#6E2680;}
.LogoDNDAColorst723{fill:#6D2681;}
.LogoDNDAColorst724{fill:#6C2681;}
.LogoDNDAColorst725{fill:#6C2581;}
.LogoDNDAColorst726{fill:#6B2581;}
.LogoDNDAColorst727{fill:#6A2582;}
.LogoDNDAColorst728{fill:#692582;}
.LogoDNDAColorst729{fill:#692482;}
.LogoDNDAColorst730{fill:#682482;}
.LogoDNDAColorst731{fill:#672482;}
.LogoDNDAColorst732{fill:#662483;}
.LogoDNDAColorst733{fill:#682383;}
.LogoDNDAColorst734{fill:#692383;}
.LogoDNDAColorst735{fill:#6A2382;}
.LogoDNDAColorst736{fill:#6B2382;}
.LogoDNDAColorst737{fill:#6C2382;}
.LogoDNDAColorst738{fill:#6D2382;}
.LogoDNDAColorst739{fill:#6E2382;}
.LogoDNDAColorst740{fill:#6F2382;}
.LogoDNDAColorst741{fill:#702382;}
.LogoDNDAColorst742{fill:#712382;}
.LogoDNDAColorst743{fill:#722282;}
.LogoDNDAColorst744{fill:#722281;}
.LogoDNDAColorst745{fill:#732482;}
.LogoDNDAColorst746{fill:#742482;}
.LogoDNDAColorst747{fill:#752482;}
.LogoDNDAColorst748{fill:#762482;}
.LogoDNDAColorst749{fill:#772482;}
.LogoDNDAColorst750{fill:#782482;}
.LogoDNDAColorst751{fill:#782481;}
.LogoDNDAColorst752{fill:#792481;}
.LogoDNDAColorst753{fill:#7A2381;}
.LogoDNDAColorst754{fill:#7B2381;}
.LogoDNDAColorst755{fill:#7C2381;}
.LogoDNDAColorst756{fill:#7D2381;}
.LogoDNDAColorst757{fill:#7D2481;}
.LogoDNDAColorst758{fill:#7E2481;}
.LogoDNDAColorst759{fill:#7F2481;}
.LogoDNDAColorst760{fill:#802481;}
.LogoDNDAColorst761{fill:#812481;}
.LogoDNDAColorst762{fill:#822381;}
.LogoDNDAColorst763{fill:#832380;}
.LogoDNDAColorst764{fill:#842380;}
.LogoDNDAColorst765{fill:#852380;}
.LogoDNDAColorst766{fill:#862380;}
.LogoDNDAColorst767{fill:#872380;}
.LogoDNDAColorst768{fill:#882380;}
.LogoDNDAColorst769{fill:#892480;}
.LogoDNDAColorst770{fill:#8A2380;}
.LogoDNDAColorst771{fill:#8B2380;}
.LogoDNDAColorst772{fill:#8C237F;}
.LogoDNDAColorst773{fill:#8D237F;}
.LogoDNDAColorst774{fill:#8E237F;}
.LogoDNDAColorst775{fill:#8F237F;}
.LogoDNDAColorst776{fill:#90237F;}
.LogoDNDAColorst777{fill:#91227F;}
.LogoDNDAColorst778{fill:#91227E;}
.LogoDNDAColorst779{fill:#92227E;}
.LogoDNDAColorst780{fill:#93227E;}
.LogoDNDAColorst781{fill:#94237E;}
.LogoDNDAColorst782{fill:#95237E;}
.LogoDNDAColorst783{fill:#96237E;}
.LogoDNDAColorst784{fill:#97237E;}
.LogoDNDAColorst785{fill:#98237E;}
.LogoDNDAColorst786{fill:#98227E;}
.LogoDNDAColorst787{fill:#99227E;}
.LogoDNDAColorst788{fill:#9A227E;}
.LogoDNDAColorst789{fill:#9B227E;}
.LogoDNDAColorst790{fill:#9C227D;}
.LogoDNDAColorst791{fill:#9D227D;}
.LogoDNDAColorst792{fill:#9E227D;}
.LogoDNDAColorst793{fill:#9E237D;}
.LogoDNDAColorst794{fill:#9F237D;}
.LogoDNDAColorst795{fill:#A0227D;}
.LogoDNDAColorst796{fill:#A1227D;}
.LogoDNDAColorst797{fill:#A2227D;}
.LogoDNDAColorst798{fill:#A3227D;}
.LogoDNDAColorst799{fill:#A3227C;}
.LogoDNDAColorst800{fill:#A4227C;}
.LogoDNDAColorst801{fill:#A5227C;}
.LogoDNDAColorst802{fill:#A6217C;}
.LogoDNDAColorst803{fill:#A7217C;}
.LogoDNDAColorst804{fill:#A8227C;}
.LogoDNDAColorst805{fill:#A9227C;}
.LogoDNDAColorst806{fill:#AA227C;}
.LogoDNDAColorst807{fill:#AB227B;}
.LogoDNDAColorst808{fill:#AC227B;}
.LogoDNDAColorst809{fill:#AD227B;}
.LogoDNDAColorst810{fill:#AD217B;}
.LogoDNDAColorst811{fill:#AE217B;}
.LogoDNDAColorst812{fill:#AF217B;}
.LogoDNDAColorst813{fill:#B0217B;}
.LogoDNDAColorst814{fill:#B1217B;}
.LogoDNDAColorst815{fill:#B2227B;}
.LogoDNDAColorst816{fill:#B3227B;}
.LogoDNDAColorst817{fill:#B4217B;}
.LogoDNDAColorst818{fill:#B5217A;}
.LogoDNDAColorst819{fill:#B6217A;}
.LogoDNDAColorst820{fill:#B7217A;}
.LogoDNDAColorst821{fill:#B8217A;}
.LogoDNDAColorst822{fill:#B9217A;}
.LogoDNDAColorst823{fill:#B9207A;}
.LogoDNDAColorst824{fill:#BA2079;}
.LogoDNDAColorst825{fill:#BB2079;}
.LogoDNDAColorst826{fill:#BC2079;}
.LogoDNDAColorst827{fill:#BD2179;}
.LogoDNDAColorst828{fill:#BE2179;}
.LogoDNDAColorst829{fill:#BF2179;}
.LogoDNDAColorst830{fill:#C02179;}
.LogoDNDAColorst831{fill:#C12079;}
.LogoDNDAColorst832{fill:#C22079;}
.LogoDNDAColorst833{fill:#C32078;}
.LogoDNDAColorst834{fill:#C42078;}
.LogoDNDAColorst835{fill:#C52078;}
.LogoDNDAColorst836{fill:#C51F78;}
.LogoDNDAColorst837{fill:#C62178;}
.LogoDNDAColorst838{fill:#C72178;}
.LogoDNDAColorst839{fill:#C82178;}
.LogoDNDAColorst840{fill:#C82078;}
.LogoDNDAColorst841{fill:#C92078;}
.LogoDNDAColorst842{fill:#CA2078;}
.LogoDNDAColorst843{fill:#CA2077;}
.LogoDNDAColorst844{fill:#CB2077;}
.LogoDNDAColorst845{fill:#CC2077;}
.LogoDNDAColorst846{fill:#CD2077;}
.LogoDNDAColorst847{fill:#CD1F77;}
.LogoDNDAColorst848{fill:#CE1F77;}
.LogoDNDAColorst849{fill:#CF2177;}
.LogoDNDAColorst850{fill:#D02177;}
.LogoDNDAColorst851{fill:#D02077;}
.LogoDNDAColorst852{fill:#D12076;}
.LogoDNDAColorst853{fill:#D22076;}
.LogoDNDAColorst854{fill:#D32076;}
.LogoDNDAColorst855{fill:#D42076;}
.LogoDNDAColorst856{fill:#D51F76;}
.LogoDNDAColorst857{fill:#D61F76;}
.LogoDNDAColorst858{fill:#D82176;}
.LogoDNDAColorst859{fill:#D82076;}
.LogoDNDAColorst860{fill:#D92075;}
.LogoDNDAColorst861{fill:#DA2075;}
.LogoDNDAColorst862{fill:#DB2075;}
.LogoDNDAColorst863{fill:#DB1F75;}
.LogoDNDAColorst864{fill:#DC1F75;}
.LogoDNDAColorst865{fill:#DD1F75;}
.LogoDNDAColorst866{fill:#DE1F74;}
.LogoDNDAColorst867{fill:#DF1E74;}
.LogoDNDAColorst868{fill:#E01E74;}
.LogoDNDAColorst869{fill:#E02074;}
.LogoDNDAColorst870{fill:#E21F74;}
.LogoDNDAColorst871{fill:#E31F74;}
.LogoDNDAColorst872{fill:#E41E74;}
.LogoDNDAColorst873{fill:#E41E73;}
.LogoDNDAColorst874{fill:#E51E73;}
.LogoDNDAColorst875{fill:#E61E73;}
.LogoDNDAColorst876{fill:#E71D73;}
.LogoDNDAColorst877{fill:#E71E73;}
.LogoDNDAColorst878{fillRule:evenodd;clipRule:evenodd;fill:#FFFFFF;}
          `
        }
      </style>
      <g>
        <g id="Layer_1">
          <g>
            <g>
              <g>
                <g>
                  <path className="LogoDNDAColorst0" d="M70.8,12.5c0,2.4-0.8,4.6-2.5,6.4c-1.7,1.8-4,2.7-7.1,2.7c-1.4,0-3.3,0-5.7-0.2c0.1-2.6,0.2-5.5,0.2-8.7
							s-0.1-5.8-0.2-8H58c0.4,0,1,0,1.8,0c0.8,0,1.3,0,1.5,0c3.3,0,5.8,0.8,7.3,2.3C70.1,8.4,70.8,10.3,70.8,12.5L70.8,12.5z M67,13
							c0-1.6-0.5-3-1.6-4.2c-1-1.1-2.6-1.7-4.8-1.7c-0.4,0-0.9,0-1.6,0.1c0.1,1.7,0.1,3.5,0.1,5.4c0,2,0,4.1,0.1,6.1
							c0.6,0.1,1.2,0.2,1.8,0.2c2,0,3.5-0.6,4.4-1.7C66.5,16,67,14.6,67,13L67,13z"/>
                  <path className="LogoDNDAColorst0" d="M61.2,21.5c-1.4,0-3.3-0.1-5.7-0.2l0,0l0,0c0.1-2.6,0.2-5.5,0.2-8.7s-0.1-5.8-0.2-8l0,0H58
							c0.4,0,0.9,0,1.8,0c0.8,0,1.3,0,1.5,0c0.8,0,1.6,0,2.3,0.1c0.7,0.1,1.4,0.2,2,0.4c0.6,0.2,1.2,0.4,1.6,0.7
							c0.5,0.3,0.9,0.6,1.3,1c0.4,0.4,0.7,0.8,1,1.2c0.3,0.4,0.5,0.9,0.7,1.3c0.2,0.5,0.3,0.9,0.4,1.4c0.1,0.5,0.1,1,0.1,1.6
							c0,0.6-0.1,1.2-0.2,1.8c-0.1,0.6-0.3,1.1-0.5,1.6c-0.2,0.5-0.5,1-0.8,1.5c-0.3,0.5-0.7,1-1.1,1.4c-0.4,0.5-0.9,0.9-1.4,1.2
							c-0.5,0.3-1.1,0.6-1.6,0.8s-1.2,0.4-1.9,0.5C62.7,21.5,62,21.5,61.2,21.5L61.2,21.5z M55.5,21.4c2.4,0.1,4.3,0.2,5.7,0.2
							c3,0,5.4-0.9,7.1-2.7c1.7-1.8,2.5-3.9,2.5-6.4c0-2.1-0.8-4-2.3-5.5c-1.5-1.5-3.9-2.3-7.3-2.3c-0.2,0-0.8,0-1.5,0
							c-0.8,0-1.4,0-1.8,0h-2.4c0.1,2.2,0.2,4.9,0.2,8S55.7,18.8,55.5,21.4L55.5,21.4z M61.2,18.9c-0.6,0-1.2-0.1-1.8-0.2l0,0l0,0
							c-0.1-2-0.1-4-0.1-6.1c0-1.8,0-3.6-0.1-5.4l0,0l0,0c0.7-0.1,1.2-0.1,1.6-0.1c1.1,0,2,0.1,2.8,0.4c0.4,0.1,0.8,0.3,1.1,0.5
							c0.3,0.2,0.6,0.5,0.9,0.7c0.5,0.6,0.9,1.2,1.2,1.9c0.3,0.7,0.4,1.5,0.4,2.3c0,0.8-0.1,1.6-0.4,2.3c-0.2,0.7-0.6,1.3-1.1,1.9
							c-0.2,0.3-0.5,0.5-0.8,0.7c-0.3,0.2-0.6,0.4-1,0.5C63,18.8,62.1,18.9,61.2,18.9L61.2,18.9z M59.4,18.7
							c0.6,0.1,1.2,0.2,1.8,0.2c2,0,3.5-0.6,4.4-1.7c1-1.1,1.4-2.5,1.4-4.2s-0.5-3-1.6-4.2c-1-1.1-2.6-1.7-4.7-1.7
							c-0.4,0-0.9,0-1.6,0.1c0.1,1.7,0.1,3.5,0.1,5.4C59.2,14.7,59.3,16.7,59.4,18.7L59.4,18.7z"/>
                </g>
                <g>
                  <path className="LogoDNDAColorst0" d="M82.7,21.4h-3.4c0-0.4-1.3-2.2-3.8-5.6c-2.7-3.5-4.2-6-4.6-7.3h-0.2c0.2,1.9,0.3,3.6,0.3,5.1
							c0,2.1,0.1,4.7,0.2,7.7h-3.4c0.1-2.7,0.2-5.6,0.2-8.7s-0.1-5.8-0.2-8h4.1c0,0.5,1.1,2.3,3.4,5.4c2.4,3.4,3.8,5.6,4.2,6.8h0.2
							c-0.2-1.9-0.3-3.6-0.3-5.1c0-2.3-0.1-4.7-0.2-7.1h3.5c-0.1,2.1-0.2,4.8-0.2,8S82.6,18.8,82.7,21.4L82.7,21.4z"/>
                  <path className="LogoDNDAColorst0" d="M82.7,21.4h-3.4c0-0.2-0.3-0.7-1-1.7c-0.6-0.9-1.6-2.2-2.9-3.9c-1.3-1.8-2.4-3.3-3.1-4.5
							c-0.8-1.2-1.2-2.1-1.4-2.8h-0.2c0.2,1.9,0.3,3.6,0.3,5.1c0,2.1,0.1,4.7,0.2,7.7l0,0h-3.4l0,0c0.1-2.6,0.2-5.6,0.2-8.7
							s-0.1-5.8-0.2-8l0,0h4.1l0,0c0,0.2,0.3,0.8,0.9,1.7c0.6,0.9,1.4,2.2,2.6,3.7c1.2,1.7,2.2,3.1,2.9,4.2c0.7,1.1,1.1,2,1.3,2.6
							h0.2c-0.2-1.9-0.3-3.6-0.3-5.1c0-2.3-0.1-4.7-0.2-7.1l0,0h3.5l0,0c-0.1,2.1-0.2,4.8-0.2,8S82.6,18.8,82.7,21.4L82.7,21.4
							L82.7,21.4z M79.3,21.4h3.4c-0.1-2.6-0.2-5.5-0.2-8.7s0.1-5.9,0.2-8h-3.5c0.1,2.4,0.2,4.8,0.2,7.1c0,1.5,0.1,3.2,0.3,5.1l0,0
							h-0.2l0,0c-0.2-0.6-0.6-1.5-1.3-2.6c-0.7-1.1-1.7-2.6-2.9-4.2c-1.1-1.6-2-2.8-2.6-3.7c-0.6-0.9-0.9-1.5-0.9-1.7h-4.1
							c0.1,2.2,0.2,4.9,0.2,8s-0.1,6.1-0.2,8.7h3.4c-0.1-3-0.2-5.6-0.2-7.7c0-1.5-0.1-3.2-0.3-5.1l0,0h0.2l0,0
							c0.2,0.6,0.7,1.6,1.4,2.8c0.8,1.2,1.8,2.7,3.1,4.5c1.3,1.7,2.2,3,2.9,3.9C79,20.7,79.3,21.2,79.3,21.4L79.3,21.4z"/>
                </g>
                <g>
                  <path className="LogoDNDAColorst0" d="M96.2,12.5c0,2.4-0.8,4.6-2.5,6.4c-1.7,1.8-4,2.7-7.1,2.7c-1.4,0-3.3,0-5.7-0.2c0.1-2.6,0.2-5.5,0.2-8.7
							s-0.1-5.8-0.2-8h2.4c0.4,0,1,0,1.8,0c0.8,0,1.3,0,1.5,0c3.3,0,5.8,0.8,7.3,2.3C95.4,8.4,96.2,10.3,96.2,12.5L96.2,12.5z
							 M92.4,13c0-1.6-0.5-3-1.6-4.2c-1-1.1-2.6-1.7-4.8-1.7c-0.4,0-0.9,0-1.6,0.1c0.1,1.7,0.1,3.5,0.1,5.4c0,2,0,4.1,0.1,6.1
							c0.6,0.1,1.2,0.2,1.8,0.2c2,0,3.5-0.6,4.4-1.7C91.9,16,92.4,14.6,92.4,13L92.4,13z"/>
                  <path className="LogoDNDAColorst0" d="M86.5,21.5c-1.4,0-3.3-0.1-5.7-0.2l0,0c0.1-2.6,0.2-5.5,0.2-8.7s-0.1-5.8-0.2-8l0,0h2.4c0.4,0,1,0,1.8,0
							c0.8,0,1.3,0,1.5,0c0.8,0,1.6,0,2.3,0.1c0.7,0.1,1.4,0.2,2,0.4c0.6,0.2,1.2,0.4,1.6,0.7c0.5,0.3,0.9,0.6,1.3,1
							c0.4,0.4,0.7,0.8,1,1.2c0.3,0.4,0.5,0.9,0.7,1.3c0.2,0.5,0.3,0.9,0.4,1.4s0.1,1,0.1,1.6c0,0.6-0.1,1.2-0.2,1.8
							c-0.1,0.6-0.3,1.1-0.5,1.6c-0.2,0.5-0.5,1-0.8,1.5s-0.7,1-1.1,1.4c-0.4,0.5-0.9,0.9-1.4,1.2c-0.5,0.3-1.1,0.6-1.6,0.8
							c-0.6,0.2-1.2,0.4-1.9,0.5C88,21.5,87.3,21.5,86.5,21.5L86.5,21.5z M80.9,21.4c2.4,0.1,4.3,0.2,5.7,0.2c3,0,5.4-0.9,7.1-2.7
							c1.7-1.8,2.5-3.9,2.5-6.4c0-2.1-0.8-4-2.3-5.5c-1.5-1.5-3.9-2.3-7.3-2.3c-0.2,0-0.8,0-1.5,0c-0.8,0-1.4,0-1.8,0h-2.4
							c0.1,2.2,0.2,4.9,0.2,8S81,18.8,80.9,21.4z M86.5,18.9c-0.6,0-1.2-0.1-1.8-0.2l0,0l0,0c-0.1-2-0.1-4.1-0.1-6.1
							c0-1.9,0-3.7-0.1-5.4l0,0l0,0c0.7-0.1,1.2-0.1,1.6-0.1c1.1,0,2,0.1,2.8,0.4c0.4,0.1,0.8,0.3,1.1,0.5c0.3,0.2,0.6,0.5,0.9,0.7
							c0.5,0.6,0.9,1.2,1.2,1.9c0.3,0.7,0.4,1.5,0.4,2.3c0,0.8-0.1,1.6-0.4,2.3c-0.2,0.7-0.6,1.3-1.1,1.9c-0.2,0.3-0.5,0.5-0.8,0.7
							c-0.3,0.2-0.6,0.4-1,0.5C88.4,18.8,87.5,18.9,86.5,18.9L86.5,18.9z M84.7,18.7c0.6,0.1,1.2,0.2,1.8,0.2c2,0,3.5-0.6,4.4-1.7
							c1-1.1,1.4-2.5,1.4-4.2s-0.5-3-1.6-4.2c-1-1.1-2.6-1.7-4.7-1.7c-0.4,0-1,0-1.6,0.1c0.1,1.7,0.1,3.5,0.1,5.4
							C84.6,14.6,84.6,16.7,84.7,18.7L84.7,18.7z"/>
                </g>
                <g>
                  <path className="LogoDNDAColorst0" d="M107.8,21.4h-4.4c0-0.6-0.4-2.2-1.3-4.8h-6.4c-0.9,2.6-1.3,4.2-1.3,4.8h-4.2c0-0.3,1.1-3.1,3.2-8.2
							c2.2-5.1,3.2-8,3.2-8.5h5.2c0,0.5,1,3.3,2.9,8.4C106.8,18.1,107.8,20.9,107.8,21.4L107.8,21.4z M101.4,14.1
							C99.8,9.7,99,7.3,99,7h-0.2c0,0.3-0.8,2.7-2.5,7.2H101.4L101.4,14.1z"/>
                  <path className="LogoDNDAColorst0" d="M107.8,21.4h-4.4c0-0.3-0.1-0.8-0.3-1.6c-0.2-0.8-0.5-1.9-0.9-3.2h-6.4c-0.9,2.6-1.3,4.2-1.3,4.8l0,0
							h-4.2l0,0c0-0.3,1.1-3.1,3.2-8.2c2.2-5.1,3.2-8,3.2-8.5l0,0h5.3l0,0c0,0.2,0.2,1.1,0.7,2.5c0.5,1.4,1.2,3.4,2.2,5.9
							C106.8,18.1,107.8,20.9,107.8,21.4L107.8,21.4L107.8,21.4z M103.3,21.4h4.4c0-0.5-1-3.3-2.9-8.3c-1-2.5-1.7-4.5-2.2-5.9
							c-0.5-1.4-0.7-2.2-0.7-2.5h-5.2c0,0.3-0.3,1.1-0.8,2.5c-0.5,1.4-1.4,3.4-2.4,6c-2.1,5.1-3.2,7.9-3.2,8.2h4.2
							c0-0.6,0.4-2.2,1.3-4.8l0,0h6.4l0,0c0.4,1.3,0.7,2.4,0.9,3.2C103.2,20.6,103.3,21.1,103.3,21.4L103.3,21.4z M101.4,14.1h-5.1
							l0,0C98,9.7,98.8,7.3,98.8,7l0,0H99l0,0C99,7.3,99.8,9.8,101.4,14.1L101.4,14.1L101.4,14.1z M96.3,14.1h5
							C99.8,9.8,99,7.4,99,7h-0.2C98.8,7.3,98,9.7,96.3,14.1L96.3,14.1z"/>
                </g>
              </g>
              <g>
                <path className="LogoDNDAColorst1" d="M70.8,12.5c0,2.4-0.8,4.6-2.5,6.4c-1.7,1.8-4,2.7-7.1,2.7c-1.4,0-3.3-0.1-5.7-0.2c0.1-2.6,0.2-5.5,0.2-8.7
						s-0.1-5.8-0.2-8H58c0.4,0,1,0,1.8,0c0.8,0,1.3,0,1.5,0c3.3,0,5.8,0.8,7.3,2.3C70.1,8.5,70.8,10.3,70.8,12.5L70.8,12.5z M67,13
						c0-1.6-0.5-3-1.6-4.2c-1-1.1-2.6-1.7-4.8-1.7c-0.4,0-0.9,0-1.6,0.1c0.1,1.7,0.1,3.5,0.1,5.4c0,2,0,4.1,0.1,6.1
						c0.6,0.1,1.2,0.2,1.8,0.2c2,0,3.5-0.6,4.4-1.7C66.5,16,67,14.6,67,13L67,13z"/>
                <path className="LogoDNDAColorst0" d="M61.2,21.5c-1.4,0-3.3-0.1-5.7-0.2l0,0l0,0c0.1-2.6,0.2-5.5,0.2-8.7s-0.1-5.8-0.2-8l0,0H58
						c0.4,0,0.9,0,1.8,0c0.8,0,1.3,0,1.5,0c0.8,0,1.6,0,2.3,0.1c0.7,0.1,1.4,0.2,2,0.4c0.6,0.2,1.2,0.4,1.6,0.7
						c0.5,0.3,0.9,0.6,1.3,1c0.4,0.4,0.7,0.8,1,1.2c0.3,0.4,0.5,0.9,0.7,1.3c0.2,0.5,0.3,0.9,0.4,1.4c0.1,0.5,0.1,1,0.1,1.6
						c0,0.6-0.1,1.2-0.2,1.8c-0.1,0.6-0.3,1.1-0.5,1.6c-0.2,0.5-0.5,1-0.8,1.5c-0.3,0.5-0.7,1-1.1,1.4c-0.4,0.5-0.9,0.9-1.4,1.2
						c-0.5,0.3-1.1,0.6-1.6,0.8s-1.2,0.4-1.9,0.5C62.7,21.5,62,21.5,61.2,21.5L61.2,21.5z M55.5,21.4c2.4,0.1,4.3,0.2,5.7,0.2
						c3,0,5.4-0.9,7.1-2.7c1.7-1.8,2.5-3.9,2.5-6.4c0-2.1-0.8-4-2.3-5.5c-1.5-1.5-3.9-2.3-7.3-2.3c-0.2,0-0.8,0-1.5,0
						c-0.9,0-1.4,0-1.8,0h-2.4c0.1,2.2,0.2,4.9,0.2,8S55.7,18.8,55.5,21.4L55.5,21.4z M61.2,18.9c-0.6,0-1.2-0.1-1.8-0.2l0,0l0,0
						c-0.1-2-0.1-4-0.1-6.1c0-1.8,0-3.6-0.1-5.4l0,0l0,0c0.7-0.1,1.2-0.1,1.6-0.1c1.1,0,2,0.1,2.8,0.4c0.4,0.1,0.8,0.3,1.1,0.5
						c0.3,0.2,0.6,0.5,0.9,0.7c0.5,0.6,0.9,1.2,1.2,1.9c0.3,0.7,0.4,1.5,0.4,2.3c0,0.8-0.1,1.6-0.4,2.3c-0.2,0.7-0.6,1.3-1.1,1.9
						c-0.2,0.3-0.5,0.5-0.8,0.7c-0.3,0.2-0.6,0.4-1,0.5C63,18.8,62.1,18.9,61.2,18.9L61.2,18.9z M59.4,18.7c0.6,0.1,1.2,0.2,1.8,0.2
						c2,0,3.5-0.6,4.4-1.7c1-1.1,1.4-2.5,1.4-4.2s-0.5-3-1.6-4.2c-1-1.1-2.6-1.7-4.7-1.7c-0.4,0-0.9,0-1.6,0.1
						c0.1,1.7,0.1,3.5,0.1,5.4C59.2,14.7,59.3,16.7,59.4,18.7z"/>
              </g>
              <g>
                <path className="LogoDNDAColorst2" d="M82.7,21.4h-3.4c0-0.4-1.3-2.2-3.8-5.6c-2.7-3.5-4.2-6-4.6-7.3h-0.2c0.2,1.9,0.3,3.6,0.3,5.1
						c0,2.1,0.1,4.7,0.2,7.7h-3.4c0.1-2.7,0.2-5.6,0.2-8.7s-0.1-5.8-0.2-8h4.1c0,0.5,1.1,2.3,3.4,5.4c2.4,3.4,3.8,5.6,4.2,6.8h0.2
						c-0.2-1.9-0.3-3.6-0.3-5.1c0-2.3-0.1-4.7-0.2-7.1h3.5c-0.1,2.1-0.2,4.8-0.2,8S82.6,18.8,82.7,21.4L82.7,21.4z"/>
                <path className="LogoDNDAColorst0" d="M82.7,21.4h-3.4c0-0.2-0.3-0.7-1-1.7c-0.6-0.9-1.6-2.2-2.9-3.9c-1.3-1.8-2.4-3.3-3.1-4.5
						c-0.8-1.2-1.2-2.1-1.4-2.8h-0.2c0.2,1.9,0.3,3.6,0.3,5.1c0,2.1,0.1,4.7,0.2,7.7l0,0h-3.4l0,0c0.1-2.6,0.2-5.6,0.2-8.7
						s-0.1-5.8-0.2-8l0,0h4.1l0,0c0,0.2,0.3,0.8,0.9,1.7c0.6,0.9,1.4,2.2,2.6,3.7c1.2,1.7,2.2,3.1,2.9,4.2c0.7,1.1,1.1,2,1.3,2.6
						h0.2c-0.2-1.9-0.3-3.6-0.3-5.1c0-2.3-0.1-4.7-0.2-7.1l0,0h3.5l0,0c-0.1,2.1-0.2,4.8-0.2,8S82.6,18.8,82.7,21.4L82.7,21.4
						L82.7,21.4z M79.3,21.4h3.4c-0.1-2.6-0.2-5.5-0.2-8.7s0.1-5.9,0.2-8h-3.5c0.1,2.4,0.2,4.8,0.2,7.1c0,1.5,0.1,3.2,0.3,5.1l0,0
						h-0.2l0,0c-0.2-0.6-0.6-1.5-1.3-2.6c-0.7-1.1-1.7-2.6-2.9-4.2c-1.1-1.6-2-2.8-2.6-3.7c-0.6-0.9-0.9-1.5-0.9-1.7h-4.1
						c0.1,2.2,0.2,4.9,0.2,8s-0.1,6.1-0.2,8.7h3.4c-0.1-3-0.2-5.6-0.2-7.7c0-1.5-0.1-3.2-0.3-5.1l0,0h0.2l0,0
						c0.2,0.6,0.7,1.6,1.4,2.8c0.8,1.2,1.8,2.7,3.1,4.5c1.3,1.7,2.2,3,2.9,3.9C79,20.7,79.3,21.2,79.3,21.4L79.3,21.4z"/>
              </g>
              <g>
                <path className="LogoDNDAColorst3" d="M96.2,12.5c0,2.4-0.8,4.6-2.5,6.4c-1.7,1.8-4,2.7-7.1,2.7c-1.4,0-3.3-0.1-5.7-0.2c0.1-2.6,0.2-5.5,0.2-8.7
						s-0.1-5.8-0.2-8h2.4c0.4,0,1,0,1.8,0c0.8,0,1.3,0,1.5,0c3.3,0,5.8,0.8,7.3,2.3C95.4,8.5,96.2,10.3,96.2,12.5L96.2,12.5z
						 M92.4,13c0-1.6-0.5-3-1.6-4.2c-1-1.1-2.6-1.7-4.8-1.7c-0.4,0-0.9,0-1.6,0.1c0.1,1.7,0.1,3.5,0.1,5.4c0,2,0,4.1,0.1,6.1
						c0.6,0.1,1.2,0.2,1.8,0.2c2,0,3.5-0.6,4.4-1.7C91.9,16,92.4,14.6,92.4,13L92.4,13z"/>
                <path className="LogoDNDAColorst0" d="M86.5,21.5c-1.4,0-3.3-0.1-5.7-0.2l0,0c0.1-2.6,0.2-5.5,0.2-8.7s-0.1-5.8-0.2-8l0,0h2.4c0.4,0,1,0,1.8,0
						c0.8,0,1.3,0,1.5,0c0.8,0,1.6,0,2.3,0.1c0.7,0.1,1.4,0.2,2,0.4c0.6,0.2,1.2,0.4,1.6,0.7c0.5,0.3,0.9,0.6,1.3,1
						c0.4,0.4,0.7,0.8,1,1.2c0.3,0.4,0.5,0.9,0.7,1.3c0.2,0.5,0.3,0.9,0.4,1.4s0.1,1,0.1,1.6c0,0.6-0.1,1.2-0.2,1.8
						c-0.1,0.6-0.3,1.1-0.5,1.6c-0.2,0.5-0.5,1-0.8,1.5s-0.7,1-1.1,1.4c-0.4,0.5-0.9,0.9-1.4,1.2c-0.5,0.3-1.1,0.6-1.6,0.8
						c-0.6,0.2-1.2,0.4-1.9,0.5C88,21.5,87.3,21.5,86.5,21.5L86.5,21.5z M80.9,21.4c2.4,0.1,4.3,0.2,5.7,0.2c3,0,5.4-0.9,7.1-2.7
						c1.7-1.8,2.5-3.9,2.5-6.4c0-2.1-0.8-4-2.3-5.5c-1.5-1.5-3.9-2.3-7.3-2.3c-0.2,0-0.8,0-1.5,0c-0.8,0-1.4,0-1.8,0h-2.4
						c0.1,2.2,0.2,4.9,0.2,8S81,18.8,80.9,21.4L80.9,21.4z M86.5,18.9c-0.6,0-1.2-0.1-1.8-0.2l0,0l0,0c-0.1-2-0.1-4.1-0.1-6.1
						c0-1.9,0-3.7-0.1-5.4l0,0l0,0c0.7-0.1,1.2-0.1,1.6-0.1c1.1,0,2,0.1,2.8,0.4c0.4,0.1,0.8,0.3,1.1,0.5c0.3,0.2,0.6,0.5,0.9,0.7
						c0.5,0.6,0.9,1.2,1.2,1.9c0.3,0.7,0.4,1.5,0.4,2.3c0,0.8-0.1,1.6-0.4,2.3c-0.2,0.7-0.6,1.3-1.1,1.9c-0.2,0.3-0.5,0.5-0.8,0.7
						c-0.3,0.2-0.6,0.4-1,0.5C88.4,18.8,87.5,18.9,86.5,18.9L86.5,18.9z M84.7,18.7c0.6,0.1,1.2,0.2,1.8,0.2c2,0,3.5-0.6,4.4-1.7
						c1-1.1,1.4-2.5,1.4-4.2s-0.5-3-1.6-4.2c-1-1.1-2.6-1.7-4.7-1.7c-0.4,0-1,0-1.6,0.1c0.1,1.7,0.1,3.5,0.1,5.4
						C84.6,14.6,84.6,16.7,84.7,18.7L84.7,18.7z"/>
              </g>
              <g>
                <path className="LogoDNDAColorst4" d="M107.8,21.4h-4.4c0-0.6-0.4-2.2-1.3-4.8h-6.4c-0.9,2.6-1.3,4.2-1.3,4.8h-4.2c0-0.3,1.1-3.1,3.2-8.2
						c2.2-5.1,3.2-8,3.2-8.5h5.2c0,0.5,1,3.3,2.9,8.4C106.8,18.1,107.8,20.9,107.8,21.4L107.8,21.4z M101.4,14.1
						C99.8,9.7,99,7.3,99,7h-0.2c0,0.3-0.8,2.7-2.5,7.2H101.4L101.4,14.1z"/>
                <path className="LogoDNDAColorst0" d="M107.8,21.4h-4.4c0-0.3-0.1-0.8-0.3-1.6c-0.2-0.8-0.5-1.9-0.9-3.2h-6.4c-0.9,2.6-1.3,4.2-1.3,4.8l0,0h-4.2
						l0,0c0-0.3,1.1-3.1,3.2-8.2c2.2-5.1,3.2-8,3.2-8.5l0,0h5.3l0,0c0,0.2,0.2,1.1,0.7,2.5c0.5,1.4,1.2,3.4,2.2,5.9
						C106.8,18.1,107.8,20.9,107.8,21.4L107.8,21.4L107.8,21.4z M103.3,21.4h4.4c0-0.5-1-3.3-2.9-8.3c-1-2.5-1.7-4.5-2.2-5.9
						c-0.5-1.4-0.7-2.2-0.7-2.5h-5.2c0,0.3-0.3,1.1-0.8,2.5c-0.5,1.4-1.4,3.4-2.4,6c-2.1,5.1-3.2,7.9-3.2,8.2h4.2
						c0-0.6,0.4-2.2,1.3-4.8l0,0h6.4l0,0c0.4,1.3,0.7,2.4,0.9,3.2C103.2,20.6,103.3,21.1,103.3,21.4L103.3,21.4z M101.4,14.1h-5.1
						l0,0C98,9.7,98.8,7.3,98.8,7l0,0H99l0,0C99,7.3,99.8,9.8,101.4,14.1L101.4,14.1L101.4,14.1z M96.3,14.1h5C99.8,9.8,99,7.4,99,7
						h-0.2C98.8,7.3,98,9.7,96.3,14.1L96.3,14.1z"/>
              </g>
              <g>
                <path className="LogoDNDAColorst0" d="M61.2,21.5c-1.4,0-3.3-0.1-5.7-0.2l0,0c0.1-2.6,0.2-5.5,0.2-8.7s-0.1-5.8-0.2-8l0,0H58c0.4,0,0.9,0,1.8,0
						c0.8,0,1.3,0,1.5,0c0.8,0,1.6,0,2.3,0.1c0.7,0.1,1.4,0.2,2,0.4c0.6,0.2,1.2,0.4,1.6,0.7c0.5,0.3,0.9,0.6,1.3,1
						c0.4,0.4,0.7,0.8,1,1.2c0.3,0.4,0.5,0.9,0.7,1.3c0.2,0.5,0.3,0.9,0.4,1.4c0.1,0.5,0.1,1,0.1,1.6c0,0.6-0.1,1.2-0.2,1.8
						c-0.1,0.6-0.3,1.1-0.5,1.6c-0.2,0.5-0.5,1-0.8,1.5c-0.3,0.5-0.7,1-1.1,1.4c-0.4,0.5-0.9,0.9-1.4,1.2c-0.5,0.3-1.1,0.6-1.6,0.8
						c-0.6,0.2-1.2,0.4-1.9,0.5C62.7,21.5,62,21.5,61.2,21.5L61.2,21.5z M55.5,21.4c2.4,0.1,4.3,0.2,5.7,0.2c3,0,5.4-0.9,7.1-2.7
						c1.7-1.8,2.5-3.9,2.5-6.4c0-2.1-0.8-4-2.3-5.5c-1.5-1.5-3.9-2.3-7.3-2.3c-0.2,0-0.8,0-1.5,0c-0.9,0-1.4,0-1.8,0h-2.4
						c0.1,2.2,0.2,4.9,0.2,8S55.7,18.8,55.5,21.4L55.5,21.4z M61.2,18.9c-0.6,0-1.2-0.1-1.8-0.2l0,0c-0.1-2-0.1-4.1-0.1-6.1
						c0-1.8,0-3.6-0.1-5.4l0,0l0,0c0.7-0.1,1.2-0.1,1.6-0.1c0.5,0,1,0,1.5,0.1c0.5,0.1,0.9,0.2,1.3,0.3c0.4,0.1,0.8,0.3,1.1,0.5
						c0.3,0.2,0.6,0.5,0.9,0.7s0.5,0.6,0.7,0.9c0.2,0.3,0.4,0.6,0.5,1c0.1,0.3,0.2,0.7,0.3,1.1C67,12.2,67,12.6,67,13
						c0,0.4,0,0.8-0.1,1.2c-0.1,0.4-0.2,0.7-0.3,1.1c-0.1,0.3-0.3,0.7-0.4,1c-0.2,0.3-0.4,0.6-0.6,0.9c-0.2,0.3-0.5,0.5-0.8,0.7
						c-0.3,0.2-0.6,0.4-1,0.5c-0.4,0.1-0.8,0.2-1.2,0.3C62.1,18.9,61.7,18.9,61.2,18.9L61.2,18.9z M59.4,18.7
						c0.6,0.1,1.2,0.2,1.8,0.2c2,0,3.5-0.6,4.4-1.7c1-1.1,1.4-2.5,1.4-4.2s-0.5-3-1.6-4.2c-1-1.1-2.6-1.7-4.8-1.7
						c-0.4,0-0.9,0-1.6,0.1c0.1,1.7,0.1,3.5,0.1,5.4C59.2,14.7,59.3,16.7,59.4,18.7L59.4,18.7z"/>
                <path className="LogoDNDAColorst0" d="M82.7,21.4h-3.4c0-0.2-0.3-0.7-1-1.7c-0.6-0.9-1.6-2.2-2.9-3.9c-1.3-1.8-2.4-3.3-3.1-4.5
						c-0.4-0.6-0.7-1.1-0.9-1.6c-0.2-0.5-0.4-0.9-0.5-1.2h-0.2c0.2,1.9,0.3,3.6,0.3,5.1c0,2.1,0.1,4.7,0.2,7.7l0,0h-3.4l0,0
						c0.1-2.6,0.2-5.6,0.2-8.7s-0.1-5.8-0.2-8l0,0h4.1l0,0c0,0.2,0.3,0.8,0.9,1.7c0.6,0.9,1.4,2.2,2.6,3.7c1.2,1.7,2.2,3.1,2.9,4.2
						c0.7,1.1,1.1,2,1.3,2.6h0.2c-0.2-1.9-0.3-3.6-0.3-5.1c0-2.3-0.1-4.7-0.2-7.1l0,0h3.5l0,0c-0.1,2.1-0.2,4.8-0.2,8
						S82.6,18.8,82.7,21.4L82.7,21.4L82.7,21.4z M79.3,21.4h3.4c-0.1-2.6-0.2-5.5-0.2-8.7s0.1-5.9,0.2-8h-3.5
						c0.1,2.4,0.2,4.8,0.2,7.1c0,1.5,0.1,3.2,0.3,5.1l0,0h-0.2l0,0c-0.2-0.6-0.6-1.5-1.3-2.6c-0.7-1.1-1.7-2.6-2.9-4.2
						c-1.1-1.6-2-2.8-2.6-3.7c-0.3-0.4-0.5-0.8-0.6-1.1C72,5,71.9,4.8,71.9,4.7h-4.1c0.1,2.2,0.2,4.9,0.2,8s-0.1,6.1-0.2,8.7h3.4
						c-0.1-3-0.2-5.6-0.2-7.7c0-1.5-0.1-3.2-0.3-5.1l0,0h0.2l0,0c0.2,0.6,0.7,1.6,1.4,2.8c0.8,1.2,1.8,2.7,3.1,4.5
						c1.3,1.7,2.2,3,2.9,3.9C79,20.7,79.3,21.2,79.3,21.4L79.3,21.4z"/>
                <path className="LogoDNDAColorst0" d="M86.5,21.5c-1.4,0-3.3-0.1-5.7-0.2l0,0c0.1-2.6,0.2-5.5,0.2-8.7s-0.1-5.8-0.2-8l0,0h2.4c0.4,0,1,0,1.8,0
						c0.8,0,1.3,0,1.5,0c0.8,0,1.6,0,2.3,0.1c0.7,0.1,1.4,0.2,2,0.4c0.6,0.2,1.2,0.4,1.6,0.7c0.5,0.3,0.9,0.6,1.3,1
						c0.4,0.4,0.7,0.8,1,1.2c0.3,0.4,0.5,0.9,0.7,1.3c0.2,0.5,0.3,0.9,0.4,1.4s0.1,1,0.1,1.6c0,0.6-0.1,1.2-0.2,1.8
						c-0.1,0.6-0.3,1.1-0.5,1.6c-0.2,0.5-0.5,1-0.8,1.5c-0.3,0.5-0.7,1-1.1,1.4c-0.4,0.5-0.9,0.9-1.4,1.2c-0.5,0.3-1.1,0.6-1.6,0.8
						c-0.6,0.2-1.2,0.4-1.9,0.5C88,21.5,87.3,21.5,86.5,21.5L86.5,21.5z M80.9,21.4c2.4,0.1,4.3,0.2,5.7,0.2c3,0,5.4-0.9,7.1-2.7
						c1.7-1.8,2.5-3.9,2.5-6.4c0-2.1-0.8-4-2.3-5.5c-1.5-1.5-3.9-2.3-7.3-2.3c-0.2,0-0.8,0-1.5,0c-0.8,0-1.4,0-1.8,0h-2.4
						c0.1,2.2,0.2,4.9,0.2,8S81,18.8,80.9,21.4L80.9,21.4z M86.5,18.9c-0.6,0-1.2-0.1-1.8-0.2l0,0l0,0c-0.1-2-0.1-4.1-0.1-6.1
						c0-1.9,0-3.7-0.1-5.4l0,0l0,0c0.7-0.1,1.2-0.1,1.6-0.1c0.5,0,1,0,1.5,0.1c0.5,0.1,0.9,0.2,1.3,0.3c0.4,0.1,0.8,0.3,1.1,0.5
						c0.3,0.2,0.6,0.5,0.9,0.7s0.5,0.6,0.7,0.9c0.2,0.3,0.4,0.6,0.5,1c0.1,0.3,0.2,0.7,0.3,1.1c0.1,0.4,0.1,0.8,0.1,1.2
						c0,0.4,0,0.8-0.1,1.2c-0.1,0.4-0.2,0.7-0.3,1.1c-0.1,0.3-0.3,0.7-0.4,1c-0.2,0.3-0.4,0.6-0.6,0.9c-0.2,0.3-0.5,0.5-0.8,0.8
						c-0.3,0.2-0.6,0.4-1,0.5c-0.4,0.1-0.8,0.2-1.2,0.3C87.5,18.9,87,18.9,86.5,18.9L86.5,18.9z M84.7,18.7c0.6,0.1,1.2,0.2,1.8,0.2
						c2,0,3.5-0.6,4.4-1.7c1-1.1,1.4-2.5,1.4-4.2s-0.5-3-1.6-4.2c-1-1.1-2.6-1.7-4.7-1.7c-0.4,0-1,0-1.6,0.1
						c0.1,1.7,0.1,3.5,0.1,5.4C84.6,14.6,84.6,16.7,84.7,18.7L84.7,18.7z"/>
                <path className="LogoDNDAColorst0" d="M107.8,21.4h-4.4c0-0.3-0.1-0.8-0.3-1.6c-0.2-0.8-0.5-1.9-0.9-3.2h-6.4c-0.9,2.6-1.3,4.2-1.3,4.8l0,0h-4.2
						l0,0c0-0.2,0.3-0.9,0.8-2.3c0.5-1.4,1.4-3.4,2.4-5.9c1.1-2.6,1.9-4.6,2.4-6c0.5-1.4,0.8-2.3,0.8-2.5l0,0h5.3l0,0
						c0,0.2,0.2,1.1,0.7,2.5c0.5,1.4,1.2,3.4,2.2,5.9C106.8,18.1,107.8,20.9,107.8,21.4L107.8,21.4L107.8,21.4z M103.3,21.4h4.4
						c0-0.5-1-3.3-2.9-8.3c-1-2.5-1.7-4.5-2.2-5.9c-0.5-1.4-0.7-2.2-0.7-2.5h-5.2c0,0.3-0.3,1.1-0.8,2.5c-0.5,1.4-1.4,3.4-2.4,6
						c-2.1,5.1-3.2,7.9-3.2,8.2h4.2c0-0.3,0.1-0.9,0.3-1.7c0.2-0.8,0.5-1.9,1-3.1l0,0h6.4l0,0c0.4,1.3,0.7,2.4,0.9,3.2
						C103.2,20.6,103.3,21.1,103.3,21.4L103.3,21.4z M101.4,14.1h-5.1l0,0C98,9.7,98.8,7.3,98.8,7l0,0H99l0,0
						C99,7.3,99.8,9.8,101.4,14.1L101.4,14.1L101.4,14.1z M96.3,14.1h5.1C99.8,9.8,99,7.3,99,7h-0.2C98.8,7.3,98,9.7,96.3,14.1
						L96.3,14.1z"/>
              </g>
            </g>
            <g>
              <path className="LogoDNDAColorst5" d="M46,22.8c0,12.4-10.3,22.4-23,22.4S0,35.2,0,22.8S10.3,0.4,23,0.4C35.7,0.4,46,10.4,46,22.8L46,22.8z" />
              <path className="LogoDNDAColorst6" d="M46,22.5c-0.1,7.8-4.2,14.7-10.6,18.8c-6.4,4.1-14.7,4.5-21.6,1.6C7.1,40.1,2.1,34,0.5,26.8
					C-1.2,19,2.3,11,8.2,6.1c6.7-5.6,16.2-6.7,24.1-3.4C40.4,6.1,45.9,14.2,46,23.1C46,23.4,46,22.6,46,22.5
					C46,15.4,42.7,9,37.2,4.7C31.2,0,23-1.1,15.9,1.1C8.9,3.2,3.3,8.8,1.1,15.8c-1.8,5.6-1.2,12,1.3,17.2
					c4.8,9.9,16.3,14.4,26.6,11.9c9.9-2.4,17-11.5,17.1-21.8C46,23,46,22.2,46,22.5L46,22.5z"/>
              <g>
                <defs>
                  <path id="SVGID_1_" d="M16.6,7.6c2.1-0.1,4.2-0.2,6.3,0.3c0.5,0.1,1,0.3,1.5,0.4c0.5,0.1,0.9,0.3,1.4,0.5
							c0.9,0.4,1.8,0.8,2.7,1.4c1.5,1,2.8,2.4,3.6,4c0.4,0.8,0.7,1.7,0.9,2.6c0.1,0.7,0.2,1.5,0.3,2.2c0.2,1.5,0.2,3-0.1,4.5
							c-0.2,0.7-0.4,1.4-0.8,2.1c-0.2,0.3-0.4,0.6-0.6,0.9c-0.1,0.1-0.2,0.2-0.3,0.4c-0.1,0.1-0.1,0.1-0.2,0.2
							c-0.1,0.1-0.1,0.1-0.2,0.2c-0.1,0.1-0.2,0.1-0.2,0.2c0,0-0.1,0.1-0.1,0.1c-0.1,0.1,0.1-0.1-0.1,0c-0.1,0.1-0.2,0.1-0.3,0.2
							c0,0-0.1,0.1-0.1,0.1c0,0,0,0-0.1,0c0.1,0,0.1-0.1,0,0c-0.1,0.1-0.3,0.2-0.4,0.2c0.1-0.1,0,0,0,0c0,0-0.1,0-0.1,0
							c-0.1,0-0.2,0.1-0.3,0.1c-0.3,0.1-0.6,0.2-1,0.3c-0.4,0.1-0.7,0.2-1.1,0.2c-1.6,0.2-3.3,0.2-5-0.1c-0.8-0.2-1.5-0.4-2.2-0.7
							c-0.7-0.3-1.3-0.7-1.9-1.2c-1.1-0.8-2-1.9-2.5-3.1c-1-2.2-0.8-4.7,0.3-6.9c0.1-0.3,0.3-0.5,0.4-0.7c0.2-0.3,0.3-0.5,0.5-0.7
							c0-0.1,0.1-0.1,0.1-0.2C16.9,15.2,17,15.1,17,15c0.1-0.1,0.2-0.2,0.3-0.3c0,0,0.1-0.1,0.2-0.2c0,0,0.1,0,0.1-0.1
							c0.1-0.1-0.1,0.1,0,0c0.1-0.1,0.2-0.2,0.4-0.3c0.1,0,0.1-0.1,0.2-0.1c0,0,0.1-0.1,0,0c0,0,0.1,0,0.1-0.1
							c0.1-0.1,0.3-0.2,0.4-0.3c0,0,0.2-0.2,0.1-0.1c0.1,0,0.1-0.1,0.2-0.1c0.1-0.1,0.3-0.2,0.4-0.2c0,0,0.1-0.1,0,0
							c0,0,0.1,0,0.1-0.1c0.1,0,0.1-0.1,0.2-0.1c0.2-0.1,0.3-0.1,0.5-0.2c0,0,0.1,0,0.1,0c0.1,0-0.1,0,0,0c0.1,0,0.2-0.1,0.2-0.1
							c0.2-0.1,0.3-0.1,0.5-0.1c0.6-0.2,1.3-0.3,1.9-0.3c0.6,0,1.3,0,1.9,0.1c1.1,0.2,2,0.8,2.7,1.6c1.5,1.6,2.1,4,1.8,6.2
							c-0.1,0.5-0.2,1.1-0.4,1.6c-0.1,0.3-0.2,0.5-0.4,0.8c0,0.1-0.1,0.1-0.1,0.2c0,0,0,0.1-0.1,0.1c-0.1,0.1,0-0.1,0,0
							c-0.1,0.1-0.2,0.2-0.2,0.4c-0.1,0.1-0.2,0.2-0.3,0.3c0.1-0.1-0.1,0.1-0.1,0.1c-0.1,0.1-0.1,0.1-0.2,0.2c0,0-0.2,0.2-0.1,0.1
							c0,0-0.1,0.1-0.2,0.1c-0.1,0-0.1,0.1-0.2,0.1c0,0-0.1,0.1,0,0c0,0-0.1,0.1-0.1,0.1c-0.1,0-0.1,0.1-0.2,0.1c0,0-0.1,0.1,0,0
							c0,0-0.1,0-0.1,0.1c-0.1,0-0.1,0.1-0.2,0.1c0,0-0.1,0-0.1,0.1c0,0,0,0-0.1,0c0.1,0,0.1,0,0,0c-0.1,0.1-0.3,0.1-0.4,0.2
							c0,0-0.1,0-0.1,0c-0.1,0,0.1,0,0,0c-0.1,0-0.2,0.1-0.3,0.1c-0.1,0.1-0.3,0.1-0.4,0.1c-0.1,0-0.1,0-0.2,0c0,0-0.1,0-0.1,0
							c0.1,0-0.1,0-0.1,0c-0.3,0-0.6,0.1-0.8,0.1c-0.5,0-1,0-1.5-0.2c-0.9-0.2-1.7-0.7-2.3-1.4c-1.3-1.3-1.9-3.2-1.8-5
							c0-0.2,0-0.4,0.1-0.7c0-0.1,0-0.2,0.1-0.3c0-0.1,0-0.1,0-0.2c0,0,0,0,0-0.1c0,0.1,0,0,0-0.1c0.1-0.2,0.1-0.4,0.2-0.6
							c0-0.1,0.1-0.2,0.1-0.3c0,0,0-0.1,0.1-0.1c0,0,0.1-0.1,0,0c0,0,0-0.1,0.1-0.1c0.1-0.1,0.1-0.2,0.2-0.2c0,0,0.1-0.1,0.1-0.1
							c0,0,0.1-0.1,0,0c0,0,0-0.1,0.1-0.1c0.1-0.1,0.1-0.1,0.2-0.2c-0.1,0.1,0,0,0,0c0,0,0.1-0.1,0.1-0.1c0.1-0.1-0.1,0.1,0,0
							c0,0,0,0,0.1,0c0,0,0.1-0.1,0.1-0.1c0,0,0.1-0.1,0,0c0,0,0,0,0.1,0c0.1,0,0.1-0.1,0.2-0.1c0,0,0,0,0.1,0c-0.2,0.1-0.1,0,0,0
							c0.1,0,0.1,0,0.2-0.1c0,0,0.1,0,0.2-0.1c0,0,0.1,0,0,0c0,0,0.1,0,0.1,0c0.1,0,0.2-0.1,0.3-0.1c0.1,0,0.1,0,0.2,0
							c0,0,0.1,0,0,0c0,0,0.1,0,0.1,0c0.3,0,0.6-0.1,0.8-0.1c0.8,0,1.5,0.1,2.2,0.4c1.1,0.4,2.1,1.4,2.1,2.6c0,0.3-0.1,0.5-0.2,0.8
							c-0.1,0.2-0.1,0.2-0.2,0.3c0,0.1-0.1,0.1-0.1,0.2c-0.1,0.1,0.1-0.1,0,0c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1
							c0.1-0.1,0,0,0,0c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1,0,0c-0.1,0.1-0.2,0.1-0.2,0.2c-0.1,0.1,0.1-0.1,0,0c-0.1,0-0.1,0.1-0.2,0.1
							c-0.1,0-0.2,0.1-0.3,0.1c0,0-0.1,0.1,0,0c0,0-0.1,0-0.1,0.1c-0.1,0-0.2,0.1-0.2,0.1c0,0-0.1,0-0.1,0c0,0,0,0,0,0
							c0,0,0,0-0.1,0c-0.3,0.1-0.5,0.1-0.8,0.2c-0.2,0-0.4,0-0.6-0.1c-0.3-0.1-0.6-0.3-0.8-0.6c-0.1-0.3-0.2-0.5-0.2-0.8
							c0-0.1,0-0.1,0-0.2c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0-0.2,0.1-0.3,0.2-0.4c-0.1,0.1,0,0,0,0c0,0,0-0.1,0.1-0.1c0,0,0,0,0,0
							c0.1-0.1-0.1,0.1,0,0c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0,0c0,0,0,0,0.1,0c0.1-0.1-0.1,0.1,0,0c0.1-0.1-0.1,0,0,0c0,0,0.2-0.1,0,0
							c0,0,0.1,0,0.1-0.1c0.1,0-0.1,0,0,0c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c-0.1,0,0,0,0,0c0.2,0,0.4,0,0.6,0c0.2,0,0.5-0.1,0.6-0.3
							c0,0,0.4-0.4,0.2-0.4c-1.1-0.1-2.3,0.4-2.9,1.4c-0.4,0.6-0.6,1.5-0.1,2.2c0.5,0.8,1.7,0.7,2.5,0.5c0.8-0.3,1.7-0.7,2.4-1.3
							c0.6-0.5,1.1-1.1,1.3-1.8c0.2-0.5,0.1-1.1-0.1-1.6c-0.3-0.6-0.7-1-1.2-1.3c-1.2-0.7-2.7-0.9-4-0.6c-1.1,0.2-2.2,0.7-3,1.5
							c-0.7,0.7-1.1,1.5-1.4,2.4c-0.5,1.8-0.1,3.7,0.9,5.2c0.5,0.8,1.2,1.4,2,1.9c0.9,0.5,1.9,0.7,2.9,0.6c2.6-0.2,5-1.8,6.1-4.1
							c1-2.1,0.8-4.6-0.1-6.6c-0.4-1-1.1-1.9-2-2.5c-0.4-0.3-0.9-0.6-1.4-0.8c-0.6-0.2-1.2-0.3-1.8-0.3c-2.8-0.1-5.5,1-7.6,2.9
							c-1.8,1.7-3,4.1-3,6.5c0,1.2,0.3,2.4,0.8,3.5c0.6,1.2,1.6,2.3,2.7,3.1c0.6,0.4,1.3,0.8,2,1.1c0.7,0.3,1.5,0.5,2.3,0.6
							c1.6,0.3,3.4,0.3,5,0c0.8-0.1,1.6-0.4,2.3-0.7c0.8-0.3,1.6-0.8,2.2-1.4c1.3-1.1,2.2-2.5,2.7-4.1c0.4-1.4,0.4-3,0.3-4.5
							c-0.1-0.7-0.2-1.5-0.3-2.2c-0.1-0.4-0.1-0.8-0.2-1.1c-0.1-0.5-0.3-0.9-0.4-1.3c-0.7-1.7-1.9-3.1-3.3-4.2
							c-0.8-0.6-1.6-1.1-2.5-1.5c-0.9-0.4-1.8-0.7-2.8-1c-2.4-0.7-4.9-0.6-7.4-0.5c-0.2,0-0.5,0.2-0.7,0.4
							C16.6,7.4,16.4,7.7,16.6,7.6L16.6,7.6L16.6,7.6z"/>
                </defs>
                <clipPath id="SVGID_00000097481963224920373020000007942837690930174392_">
                  <use xlinkHref="#SVGID_1_" style={{overflow:'visible'}} />
                </clipPath>
                <g style={{clipPath:'url(#SVGID_00000097481963224920373020000007942837690930174392_)'}}>
                  <g>
                    <path className="LogoDNDAColorst8" d="M24.8,17.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S24.8,16.9,24.8,17.3z" />
                    <path className="LogoDNDAColorst9" d="M24.7,17.2c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C24.4,16.6,24.7,16.9,24.7,17.2z"/>
                    <path className="LogoDNDAColorst10" d="M24.6,17.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S24.6,16.9,24.6,17.2z" />
                    <path className="LogoDNDAColorst11" d="M24.5,17.2c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.6,0.7-0.6
								C24.2,16.6,24.5,16.9,24.5,17.2z"/>
                    <path className="LogoDNDAColorst12" d="M24.4,17.3c0,0.4-0.3,0.7-0.7,0.7S23,17.6,23,17.3s0.3-0.6,0.7-0.6S24.4,16.9,24.4,17.3z" />
                    <path className="LogoDNDAColorst13" d="M24.3,17.3c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S24.3,16.9,24.3,17.3z" />
                    <path className="LogoDNDAColorst14" d="M24.1,17.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C23.9,16.7,24.1,17,24.1,17.3z"/>
                    <path className="LogoDNDAColorst14" d="M24,17.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S24,17,24,17.4z" />
                    <path className="LogoDNDAColorst15" d="M23.9,17.4c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S23.9,17.1,23.9,17.4z" />
                    <path className="LogoDNDAColorst16" d="M23.8,17.5c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S23.8,17.1,23.8,17.5z" />
                    <path className="LogoDNDAColorst17" d="M23.7,17.5c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S23.7,17.2,23.7,17.5z"
                    />
                    <path className="LogoDNDAColorst18" d="M23.6,17.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S23.6,17.3,23.6,17.6z" />
                    <path className="LogoDNDAColorst18" d="M23.5,17.7c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7C23.2,17,23.5,17.3,23.5,17.7
								z"/>
                    <path className="LogoDNDAColorst19" d="M23.4,17.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C23.1,17.1,23.4,17.4,23.4,17.8z"/>
                    <path className="LogoDNDAColorst20" d="M23.2,17.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C23,17.2,23.2,17.5,23.2,17.9
								z"/>
                    <path className="LogoDNDAColorst20" d="M23.1,18c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S23.1,17.6,23.1,18z" />
                    <path className="LogoDNDAColorst21" d="M23,18.1c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7C22.7,17.4,23,17.7,23,18.1z" />
                    <path className="LogoDNDAColorst21" d="M22.9,18.2c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S22.9,17.8,22.9,18.2z" />
                    <path className="LogoDNDAColorst22" d="M22.8,18.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S22.8,17.9,22.8,18.3z" />
                    <path className="LogoDNDAColorst23" d="M22.7,18.4c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7C22.5,17.7,22.7,18,22.7,18.4
								z"/>
                    <path className="LogoDNDAColorst24" d="M22.7,18.5c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S22.7,18.1,22.7,18.5z" />
                    <path className="LogoDNDAColorst25" d="M22.6,18.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C22.3,18,22.6,18.3,22.6,18.6
								z"/>
                    <path className="LogoDNDAColorst25" d="M22.5,18.7c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S22.5,18.4,22.5,18.7z" />
                    <path className="LogoDNDAColorst26" d="M22.4,18.8c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C22.1,18.2,22.4,18.5,22.4,18.8z" />
                    <path className="LogoDNDAColorst26" d="M22.4,19c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S22.4,18.6,22.4,19z" />
                    <path className="LogoDNDAColorst27" d="M22.3,19.1c0,0.4-0.3,0.6-0.7,0.6S21,19.4,21,19.1s0.3-0.6,0.7-0.6C22,18.4,22.3,18.7,22.3,19.1z" />
                    <path className="LogoDNDAColorst28" d="M22.3,19.2c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C22,18.5,22.3,18.8,22.3,19.2
								z"/>
                    <path className="LogoDNDAColorst29" d="M22.3,19.3c0,0.4-0.3,0.7-0.7,0.7S21,19.7,21,19.3s0.3-0.7,0.7-0.7S22.3,18.9,22.3,19.3z" />
                    <path className="LogoDNDAColorst30" d="M22.2,19.4c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S22.2,19.1,22.2,19.4z" />
                    <path className="LogoDNDAColorst30" d="M22.2,19.5c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S22.2,19.2,22.2,19.5z" />
                    <path className="LogoDNDAColorst31" d="M22.2,19.6c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S22.2,19.3,22.2,19.6z" />
                    <path className="LogoDNDAColorst32" d="M22.3,19.8c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S22.3,19.4,22.3,19.8z" />
                    <path className="LogoDNDAColorst33" d="M22.3,19.9c0,0.4-0.3,0.6-0.7,0.6S21,20.2,21,19.9c0-0.4,0.3-0.7,0.7-0.7S22.3,19.5,22.3,19.9z" />
                    <path className="LogoDNDAColorst33" d="M22.3,20c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6C22,19.3,22.3,19.6,22.3,20z" />
                    <path className="LogoDNDAColorst34" d="M22.4,20c0,0.4-0.3,0.7-0.7,0.7S21,20.4,21,20s0.3-0.6,0.7-0.6S22.4,19.7,22.4,20z" />
                    <path className="LogoDNDAColorst35" d="M22.4,20.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C22.1,19.5,22.4,19.8,22.4,20.1z"/>
                    <path className="LogoDNDAColorst36" d="M22.5,20.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S22.5,19.9,22.5,20.2z" />
                    <path className="LogoDNDAColorst37" d="M22.6,20.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S22.6,19.9,22.6,20.3z" />
                    <path className="LogoDNDAColorst38" d="M22.7,20.4c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C22.4,19.7,22.7,20,22.7,20.4z"/>
                    <path className="LogoDNDAColorst39" d="M22.8,20.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C22.5,19.8,22.8,20.1,22.8,20.4z" />
                    <path className="LogoDNDAColorst39" d="M23,20.5c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C22.7,19.9,23,20.1,23,20.5z"/>
                    <path className="LogoDNDAColorst40" d="M23.1,20.6c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7
								C22.8,19.9,23.1,20.2,23.1,20.6z"/>
                    <path className="LogoDNDAColorst41" d="M23.3,20.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C23,19.9,23.3,20.2,23.3,20.6z"/>
                    <path className="LogoDNDAColorst41" d="M23.5,20.6c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7C23.2,20,23.5,20.3,23.5,20.6
								z"/>
                    <path className="LogoDNDAColorst42" d="M23.7,20.7c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S23.7,20.3,23.7,20.7z" />
                    <path className="LogoDNDAColorst42" d="M24,20.7c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S24,20.3,24,20.7z" />
                    <path className="LogoDNDAColorst43" d="M24.2,20.7c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S24.2,20.3,24.2,20.7z" />
                    <path className="LogoDNDAColorst44" d="M24.5,20.7c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S24.5,20.3,24.5,20.7z" />
                    <path className="LogoDNDAColorst44" d="M24.7,20.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7S23.6,20,24,20C24.4,20,24.7,20.3,24.7,20.7z"
                    />
                    <path className="LogoDNDAColorst45" d="M24.7,20.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C24.4,20,24.7,20.3,24.7,20.7z"/>
                    <path className="LogoDNDAColorst45" d="M24.8,20.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C24.5,20,24.8,20.3,24.8,20.7
								z"/>
                    <path className="LogoDNDAColorst46" d="M24.9,20.6c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S24.9,20.3,24.9,20.6z" />
                    <path className="LogoDNDAColorst47" d="M25,20.6c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7C24.7,20,25,20.2,25,20.6z" />
                    <path className="LogoDNDAColorst47" d="M25.1,20.6c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S25.1,20.2,25.1,20.6z" />
                    <path className="LogoDNDAColorst48" d="M25.2,20.6c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S25.2,20.2,25.2,20.6z" />
                    <path className="LogoDNDAColorst49" d="M25.3,20.5c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S25.3,20.2,25.3,20.5z" />
                    <path className="LogoDNDAColorst50" d="M25.4,20.5c0,0.4-0.3,0.7-0.7,0.7S24,20.8,24,20.5s0.3-0.6,0.7-0.6S25.4,20.1,25.4,20.5z" />
                    <path className="LogoDNDAColorst51" d="M25.4,20.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C25.1,19.8,25.4,20.1,25.4,20.4z"/>
                    <path className="LogoDNDAColorst51" d="M25.5,20.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S25.5,20,25.5,20.4z" />
                    <path className="LogoDNDAColorst52" d="M25.6,20.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S25.6,20,25.6,20.3z" />
                    <path className="LogoDNDAColorst53" d="M25.7,20.3c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7
								C25.4,19.6,25.7,19.9,25.7,20.3z"/>
                    <path className="LogoDNDAColorst53" d="M25.8,20.2c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C25.5,19.6,25.8,19.9,25.8,20.2z"/>
                    <path className="LogoDNDAColorst54" d="M25.9,20.1c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7C25.6,19.5,25.9,19.8,25.9,20.1z" />
                    <path className="LogoDNDAColorst55" d="M26,20.1c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S26,19.7,26,20.1z" />
                    <path className="LogoDNDAColorst56" d="M26.1,20c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C25.8,19.4,26.1,19.6,26.1,20z"/>
                    <path className="LogoDNDAColorst57" d="M26.2,19.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C25.9,19.3,26.2,19.6,26.2,19.9z" />
                    <path className="LogoDNDAColorst58" d="M26.3,19.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S26.3,19.5,26.3,19.9z" />
                    <path className="LogoDNDAColorst59" d="M26.3,19.8c0,0.4-0.3,0.6-0.7,0.6S25,20.1,25,19.8s0.3-0.6,0.7-0.6S26.3,19.4,26.3,19.8z" />
                    <path className="LogoDNDAColorst59" d="M26.4,19.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C26.1,19,26.4,19.3,26.4,19.7z"/>
                    <path className="LogoDNDAColorst60" d="M26.5,19.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C26.2,19,26.5,19.3,26.5,19.6
								z"/>
                    <path className="LogoDNDAColorst60" d="M26.6,19.5c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S26.6,19.2,26.6,19.5z" />
                    <path className="LogoDNDAColorst61" d="M26.7,19.4c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S26.7,19.1,26.7,19.4z"
                    />
                    <path className="LogoDNDAColorst62" d="M26.8,19.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C26.5,18.7,26.8,19,26.8,19.3
								z"/>
                    <path className="LogoDNDAColorst63" d="M26.8,19.3c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7
								C26.6,18.6,26.8,18.9,26.8,19.3z"/>
                    <path className="LogoDNDAColorst64" d="M26.9,19.2c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S26.9,18.8,26.9,19.2z" />
                    <path className="LogoDNDAColorst65" d="M27,19.1c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S27,18.7,27,19.1z" />
                    <path className="LogoDNDAColorst66" d="M27.1,19c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6C26.8,18.3,27.1,18.6,27.1,19z"
                    />
                    <path className="LogoDNDAColorst66" d="M27.1,18.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C26.8,18.2,27.1,18.5,27.1,18.9z"/>
                    <path className="LogoDNDAColorst67" d="M27.2,18.8c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S27.2,18.4,27.2,18.8z" />
                    <path className="LogoDNDAColorst68" d="M27.3,18.7c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S27.3,18.3,27.3,18.7z" />
                    <path className="LogoDNDAColorst69" d="M27.3,18.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6C27,17.9,27.3,18.2,27.3,18.6
								z"/>
                    <path className="LogoDNDAColorst70" d="M27.4,18.4c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C27.1,17.8,27.4,18.1,27.4,18.4z"/>
                    <path className="LogoDNDAColorst71" d="M27.4,18.3c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7C27.1,17.7,27.4,18,27.4,18.3
								z"/>
                    <path className="LogoDNDAColorst71" d="M27.5,18.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S27.5,17.9,27.5,18.2z" />
                    <path className="LogoDNDAColorst72" d="M27.5,18.1c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.6,0.7-0.6
								C27.2,17.5,27.5,17.8,27.5,18.1z"/>
                    <path className="LogoDNDAColorst73" d="M27.6,18c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C27.3,17.4,27.6,17.7,27.6,18z"
                    />
                    <path className="LogoDNDAColorst73" d="M27.6,17.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C27.3,17.3,27.6,17.6,27.6,17.9z"/>
                    <path className="LogoDNDAColorst74" d="M27.7,17.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C27.4,17.2,27.7,17.5,27.7,17.8z"/>
                    <path className="LogoDNDAColorst75" d="M27.7,17.7c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S27.7,17.3,27.7,17.7z" />
                    <path className="LogoDNDAColorst76" d="M27.7,17.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C27.4,16.9,27.7,17.2,27.7,17.6z"/>
                    <path className="LogoDNDAColorst77" d="M27.7,17.5c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C27.5,16.8,27.7,17.1,27.7,17.5z"/>
                    <path className="LogoDNDAColorst77" d="M27.8,17.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S27.8,17,27.8,17.4z" />
                    <path className="LogoDNDAColorst78" d="M27.8,17.3c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S27.8,16.9,27.8,17.3z" />
                    <path className="LogoDNDAColorst78" d="M27.8,17.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S27.8,16.8,27.8,17.2z" />
                    <path className="LogoDNDAColorst79" d="M27.8,17.1c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C27.5,16.4,27.8,16.7,27.8,17.1z"/>
                    <path className="LogoDNDAColorst80" d="M27.8,17c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7C27.5,16.3,27.8,16.6,27.8,17z" />
                    <path className="LogoDNDAColorst81" d="M27.8,16.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C27.5,16.2,27.8,16.5,27.8,16.8z"/>
                    <path className="LogoDNDAColorst81" d="M27.8,16.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C27.5,16.1,27.8,16.4,27.8,16.7z"/>
                    <path className="LogoDNDAColorst82" d="M27.8,16.6c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7C27.5,16,27.8,16.3,27.8,16.6
								z"/>
                    <path className="LogoDNDAColorst82" d="M27.7,16.5c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C27.4,15.9,27.7,16.2,27.7,16.5z"/>
                    <path className="LogoDNDAColorst83" d="M27.7,16.4c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C27.4,15.8,27.7,16.1,27.7,16.4z"/>
                    <path className="LogoDNDAColorst83" d="M27.7,16.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S27.7,16,27.7,16.3z" />
                    <path className="LogoDNDAColorst84" d="M27.6,16.2c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C27.3,15.6,27.6,15.9,27.6,16.2z"/>
                    <path className="LogoDNDAColorst84" d="M27.6,16.1c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.6,0.7-0.6
								C27.3,15.5,27.6,15.8,27.6,16.1z"/>
                    <path className="LogoDNDAColorst85" d="M27.5,16.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S27.5,15.7,27.5,16.1z"
                    />
                    <path className="LogoDNDAColorst86" d="M27.5,16c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C27.2,15.3,27.5,15.6,27.5,16z"
                    />
                    <path className="LogoDNDAColorst87" d="M27.4,15.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C27.1,15.2,27.4,15.5,27.4,15.9z"/>
                    <path className="LogoDNDAColorst88" d="M27.3,15.8c0,0.4-0.3,0.7-0.7,0.7S26,16.1,26,15.8c0-0.4,0.3-0.7,0.7-0.7S27.3,15.4,27.3,15.8z" />
                    <path className="LogoDNDAColorst88" d="M27.2,15.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S27.2,15.3,27.2,15.7z" />
                    <path className="LogoDNDAColorst89" d="M27.1,15.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C26.8,15,27.1,15.3,27.1,15.6z"/>
                    <path className="LogoDNDAColorst89" d="M27,15.5c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S27,15.2,27,15.5z" />
                    <path className="LogoDNDAColorst90" d="M26.9,15.5c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S26.9,15.1,26.9,15.5z" />
                    <path className="LogoDNDAColorst90" d="M26.8,15.4c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.6,0.7-0.6
								C26.5,14.7,26.8,15,26.8,15.4z"/>
                    <path className="LogoDNDAColorst91" d="M26.7,15.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C26.4,14.7,26.7,15,26.7,15.3z"/>
                    <path className="LogoDNDAColorst92" d="M26.6,15.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C26.3,14.6,26.6,14.9,26.6,15.3z"/>
                    <path className="LogoDNDAColorst93" d="M26.4,15.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S26.4,14.8,26.4,15.2z" />
                    <path className="LogoDNDAColorst94" d="M26.3,15.1c0,0.4-0.3,0.6-0.7,0.6S25,15.5,25,15.1c0-0.4,0.3-0.7,0.7-0.7S26.3,14.8,26.3,15.1z" />
                    <path className="LogoDNDAColorst95" d="M26.1,15.1c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S26.1,14.7,26.1,15.1z" />
                    <path className="LogoDNDAColorst95" d="M26,15c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7C25.7,14.4,26,14.7,26,15z"
                    />
                    <path className="LogoDNDAColorst96" d="M25.8,15c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S25.8,14.6,25.8,15z" />
                    <path className="LogoDNDAColorst97" d="M25.6,14.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S25.6,14.6,25.6,14.9z" />
                    <path className="LogoDNDAColorst98" d="M25.4,14.9c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C25.1,14.2,25.4,14.5,25.4,14.9z"/>
                    <path className="LogoDNDAColorst99" d="M25.2,14.8c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S25.2,14.5,25.2,14.8z" />
                    <path className="LogoDNDAColorst100" d="M25,14.8c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C24.7,14.2,25,14.5,25,14.8z"/>
                    <path className="LogoDNDAColorst101" d="M24.8,14.8c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S24.8,14.4,24.8,14.8z" />
                    <path className="LogoDNDAColorst101" d="M24.6,14.8c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C24.3,14.1,24.6,14.4,24.6,14.8z"/>
                    <path className="LogoDNDAColorst102" d="M24.4,14.7c0,0.4-0.3,0.7-0.7,0.7S23,15.1,23,14.7s0.3-0.7,0.7-0.7S24.4,14.4,24.4,14.7z" />
                    <path className="LogoDNDAColorst103" d="M24.1,14.7c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S24.1,14.4,24.1,14.7z" />
                    <path className="LogoDNDAColorst104" d="M23.8,14.7c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.6,0.7-0.6
								C23.5,14.1,23.8,14.4,23.8,14.7z"/>
                    <path className="LogoDNDAColorst104" d="M23.6,14.7c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S23.6,14.4,23.6,14.7z" />
                    <path className="LogoDNDAColorst105" d="M23.3,14.7c0,0.4-0.3,0.6-0.7,0.6S22,15.1,22,14.7c0-0.4,0.3-0.7,0.7-0.7S23.3,14.4,23.3,14.7z" />
                    <path className="LogoDNDAColorst106" d="M23,14.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S23,14.4,23,14.7z" />
                    <path className="LogoDNDAColorst107" d="M22.7,14.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C22.4,14.1,22.7,14.4,22.7,14.7z"/>
                    <path className="LogoDNDAColorst108" d="M22.4,14.8c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C22.1,14.1,22.4,14.4,22.4,14.8z"/>
                    <path className="LogoDNDAColorst109" d="M22.1,14.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C21.8,14.1,22.1,14.4,22.1,14.8z"/>
                    <path className="LogoDNDAColorst110" d="M21.8,14.8c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S21.8,14.5,21.8,14.8z" />
                    <path className="LogoDNDAColorst111" d="M21.6,14.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S21.6,14.5,21.6,14.9z" />
                    <path className="LogoDNDAColorst111" d="M21.5,15c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6C21.2,14.3,21.5,14.6,21.5,15z
								"/>
                    <path className="LogoDNDAColorst112" d="M21.3,15.1c0,0.4-0.3,0.7-0.7,0.7S20,15.5,20,15.1c0-0.4,0.3-0.6,0.7-0.6C21,14.4,21.3,14.7,21.3,15.1
								z"/>
                    <path className="LogoDNDAColorst112" d="M21.2,15.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S21.2,14.8,21.2,15.2z" />
                    <path className="LogoDNDAColorst113" d="M21,15.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C20.7,14.6,21,14.9,21,15.3z"/>
                    <path className="LogoDNDAColorst114" d="M20.9,15.4c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C20.6,14.7,20.9,15,20.9,15.4z"/>
                    <path className="LogoDNDAColorst115" d="M20.7,15.5c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S20.7,15.1,20.7,15.5z
								"/>
                    <path className="LogoDNDAColorst116" d="M20.6,15.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C20.3,14.9,20.6,15.2,20.6,15.6z"/>
                    <path className="LogoDNDAColorst117" d="M20.5,15.7c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C20.2,15,20.5,15.3,20.5,15.7z"/>
                    <path className="LogoDNDAColorst117" d="M20.3,15.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C20,15.1,20.3,15.4,20.3,15.8z"/>
                    <path className="LogoDNDAColorst118" d="M20.2,15.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C19.9,15.2,20.2,15.5,20.2,15.9z"/>
                    <path className="LogoDNDAColorst119" d="M20.1,16c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C19.8,15.4,20.1,15.6,20.1,16z"/>
                    <path className="LogoDNDAColorst120" d="M20,16.1c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S20,15.8,20,16.1z" />
                    <path className="LogoDNDAColorst121" d="M19.9,16.2c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S19.9,15.9,19.9,16.2z
								"/>
                    <path className="LogoDNDAColorst122" d="M19.8,16.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S19.8,16,19.8,16.3z" />
                    <path className="LogoDNDAColorst122" d="M19.7,16.5c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S19.7,16.1,19.7,16.5z" />
                    <path className="LogoDNDAColorst123" d="M19.6,16.6c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S19.6,16.2,19.6,16.6z" />
                    <path className="LogoDNDAColorst124" d="M19.5,16.7c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.6,0.7-0.6
								C19.2,16,19.5,16.3,19.5,16.7z"/>
                    <path className="LogoDNDAColorst125" d="M19.4,16.8c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S19.4,16.5,19.4,16.8z" />
                    <path className="LogoDNDAColorst126" d="M19.3,16.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C19.1,16.3,19.3,16.6,19.3,16.9z"/>
                    <path className="LogoDNDAColorst127" d="M19.3,17.1c0,0.4-0.3,0.7-0.7,0.7S18,17.4,18,17.1c0-0.4,0.3-0.7,0.7-0.7S19.3,16.7,19.3,17.1z" />
                    <path className="LogoDNDAColorst128" d="M19.2,17.2c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C18.9,16.5,19.2,16.8,19.2,17.2z"/>
                    <path className="LogoDNDAColorst129" d="M19.1,17.3c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S19.1,16.9,19.1,17.3z" />
                    <path className="LogoDNDAColorst130" d="M19.1,17.4c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C18.8,16.8,19.1,17.1,19.1,17.4z"/>
                    <path className="LogoDNDAColorst131" d="M19,17.5c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S19,17.2,19,17.5z" />
                    <path className="LogoDNDAColorst131" d="M19,17.7c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S19,17.3,19,17.7z" />
                    <path className="LogoDNDAColorst132" d="M18.9,17.8c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7C18.6,17.2,18.9,17.4,18.9,17.8z"
                    />
                    <path className="LogoDNDAColorst133" d="M18.9,17.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S18.9,17.6,18.9,17.9z" />
                    <path className="LogoDNDAColorst134" d="M18.8,18.1c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S18.8,17.7,18.8,18.1z" />
                    <path className="LogoDNDAColorst135" d="M18.8,18.2c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C18.5,17.5,18.8,17.8,18.8,18.2z"/>
                    <path className="LogoDNDAColorst135" d="M18.8,18.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C18.5,17.7,18.8,18,18.8,18.3z"/>
                    <path className="LogoDNDAColorst136" d="M18.7,18.4c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7
								C18.4,17.8,18.7,18.1,18.7,18.4z"/>
                    <path className="LogoDNDAColorst136" d="M18.7,18.6c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S18.7,18.2,18.7,18.6z" />
                    <path className="LogoDNDAColorst137" d="M18.7,18.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C18.4,18.1,18.7,18.4,18.7,18.7z"/>
                    <path className="LogoDNDAColorst138" d="M18.7,18.8c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S18.7,18.5,18.7,18.8z" />
                    <path className="LogoDNDAColorst139" d="M18.7,19c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S18.7,18.6,18.7,19z" />
                    <path className="LogoDNDAColorst140" d="M18.6,19.1c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C18.4,18.5,18.6,18.8,18.6,19.1z"/>
                    <path className="LogoDNDAColorst141" d="M18.6,19.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S18.6,18.9,18.6,19.2z" />
                    <path className="LogoDNDAColorst142" d="M18.6,19.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S18.6,19,18.6,19.4z" />
                    <path className="LogoDNDAColorst143" d="M18.6,19.5c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S18.6,19.1,18.6,19.5z" />
                    <path className="LogoDNDAColorst144" d="M18.6,19.6c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.6,0.7-0.6
								C18.4,19,18.6,19.3,18.6,19.6z"/>
                    <path className="LogoDNDAColorst145" d="M18.6,19.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C18.4,19.1,18.6,19.4,18.6,19.8z"/>
                    <path className="LogoDNDAColorst146" d="M18.7,19.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S18.7,19.5,18.7,19.9z" />
                    <path className="LogoDNDAColorst146" d="M18.7,20c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S18.7,19.7,18.7,20z" />
                    <path className="LogoDNDAColorst147" d="M18.7,20.2c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7
								C18.4,19.5,18.7,19.8,18.7,20.2z"/>
                    <path className="LogoDNDAColorst148" d="M18.7,20.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S18.7,19.9,18.7,20.3z" />
                    <path className="LogoDNDAColorst149" d="M18.7,20.4c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C18.4,19.8,18.7,20.1,18.7,20.4z"/>
                    <path className="LogoDNDAColorst149" d="M18.8,20.6c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S18.8,20.2,18.8,20.6z" />
                    <path className="LogoDNDAColorst150" d="M18.8,20.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C18.5,20,18.8,20.3,18.8,20.7z"/>
                    <path className="LogoDNDAColorst150" d="M18.8,20.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C18.5,20.2,18.8,20.5,18.8,20.8z"/>
                    <path className="LogoDNDAColorst151" d="M18.9,21c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S18.9,20.6,18.9,21z" />
                    <path className="LogoDNDAColorst152" d="M18.9,21.1c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S18.9,20.7,18.9,21.1z" />
                    <path className="LogoDNDAColorst153" d="M18.9,21.2c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7
								C18.6,20.6,18.9,20.9,18.9,21.2z"/>
                    <path className="LogoDNDAColorst153" d="M19,21.3c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7C18.7,20.7,19,21,19,21.3z" />
                    <path className="LogoDNDAColorst154" d="M19,21.5c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7C18.7,20.8,19,21.1,19,21.5z"
                    />
                    <path className="LogoDNDAColorst155" d="M19.1,21.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S19.1,21.2,19.1,21.6z
								"/>
                    <path className="LogoDNDAColorst156" d="M19.1,21.7c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S19.1,21.4,19.1,21.7z" />
                    <path className="LogoDNDAColorst157" d="M19.2,21.8c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.6,0.7-0.6
								C18.9,21.2,19.2,21.5,19.2,21.8z"/>
                    <path className="LogoDNDAColorst158" d="M19.2,22c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S19.2,21.6,19.2,22z" />
                    <path className="LogoDNDAColorst159" d="M19.3,22.1c0,0.4-0.3,0.7-0.7,0.7S18,22.5,18,22.1s0.3-0.7,0.7-0.7C19,21.4,19.3,21.7,19.3,22.1z" />
                    <path className="LogoDNDAColorst159" d="M19.4,22.2c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S19.4,21.9,19.4,22.2z" />
                    <path className="LogoDNDAColorst160" d="M19.4,22.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C19.1,21.7,19.4,22,19.4,22.3z"/>
                    <path className="LogoDNDAColorst160" d="M19.5,22.5c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S19.5,22.1,19.5,22.5z" />
                    <path className="LogoDNDAColorst161" d="M19.6,22.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C19.3,21.9,19.6,22.2,19.6,22.6z"/>
                    <path className="LogoDNDAColorst162" d="M19.6,22.7c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7S18.6,22,19,22C19.4,22,19.6,22.3,19.6,22.7z" />
                    <path className="LogoDNDAColorst163" d="M19.7,22.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C19.4,22.2,19.7,22.4,19.7,22.8z"/>
                    <path className="LogoDNDAColorst164" d="M19.8,22.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C19.5,22.3,19.8,22.6,19.8,22.9z"/>
                    <path className="LogoDNDAColorst164" d="M19.9,23c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7C19.6,22.4,19.9,22.7,19.9,23z
								"/>
                    <path className="LogoDNDAColorst165" d="M20,23.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S20,22.8,20,23.1z" />
                    <path className="LogoDNDAColorst166" d="M20.1,23.3c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C19.8,22.6,20.1,22.9,20.1,23.3z"/>
                    <path className="LogoDNDAColorst167" d="M20.1,23.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6C19.8,22.7,20.1,23,20.1,23.4z" />
                    <path className="LogoDNDAColorst168" d="M20.2,23.5c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C19.9,22.8,20.2,23.1,20.2,23.5z"/>
                    <path className="LogoDNDAColorst169" d="M20.3,23.6c0,0.4-0.3,0.7-0.7,0.7S19,23.9,19,23.6s0.3-0.6,0.7-0.6S20.3,23.2,20.3,23.6z" />
                    <path className="LogoDNDAColorst170" d="M20.4,23.7c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S20.4,23.3,20.4,23.7z" />
                    <path className="LogoDNDAColorst171" d="M20.5,23.8c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S20.5,23.4,20.5,23.8z" />
                    <path className="LogoDNDAColorst172" d="M20.6,23.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S20.6,23.5,20.6,23.9z" />
                    <path className="LogoDNDAColorst173" d="M20.7,24c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C20.4,23.3,20.7,23.6,20.7,24z
								"/>
                    <path className="LogoDNDAColorst174" d="M20.8,24.1c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S20.8,23.7,20.8,24.1z" />
                    <path className="LogoDNDAColorst175" d="M20.9,24.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C20.6,23.5,20.9,23.8,20.9,24.1z"/>
                    <path className="LogoDNDAColorst176" d="M21,24.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S21,23.9,21,24.2z" />
                    <path className="LogoDNDAColorst177" d="M21.1,24.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S21.1,24,21.1,24.3z" />
                    <path className="LogoDNDAColorst178" d="M21.2,24.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S21.2,24.1,21.2,24.4z" />
                    <path className="LogoDNDAColorst179" d="M21.3,24.5c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C21,23.8,21.3,24.1,21.3,24.5z"/>
                    <path className="LogoDNDAColorst179" d="M21.4,24.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S21.4,24.2,21.4,24.6z" />
                    <path className="LogoDNDAColorst180" d="M21.5,24.7c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S21.5,24.3,21.5,24.7z" />
                    <path className="LogoDNDAColorst180" d="M21.7,24.7c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S21.7,24.4,21.7,24.7z" />
                    <path className="LogoDNDAColorst181" d="M21.8,24.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C21.5,24.1,21.8,24.4,21.8,24.8z"/>
                    <path className="LogoDNDAColorst182" d="M21.9,24.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S21.9,24.5,21.9,24.9z" />
                    <path className="LogoDNDAColorst183" d="M22,24.9c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.6,0.7-0.6S22,24.6,22,24.9z" />
                    <path className="LogoDNDAColorst184" d="M22.1,25c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S22.1,24.6,22.1,25z" />
                    <path className="LogoDNDAColorst185" d="M22.2,25.1c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S22.2,24.7,22.2,25.1z" />
                    <path className="LogoDNDAColorst186" d="M22.4,25.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C22.1,24.5,22.4,24.8,22.4,25.1z"/>
                    <path className="LogoDNDAColorst187" d="M22.5,25.2c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S22.5,24.8,22.5,25.2z" />
                    <path className="LogoDNDAColorst188" d="M22.6,25.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S22.6,24.9,22.6,25.2z" />
                    <path className="LogoDNDAColorst188" d="M22.7,25.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S22.7,24.9,22.7,25.3z" />
                    <path className="LogoDNDAColorst189" d="M22.8,25.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C22.5,24.7,22.8,25,22.8,25.3z"/>
                    <path className="LogoDNDAColorst190" d="M23,25.4c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6C22.7,24.7,23,25,23,25.4z" />
                    <path className="LogoDNDAColorst190" d="M23.1,25.4c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C22.8,24.8,23.1,25,23.1,25.4z"/>
                    <path className="LogoDNDAColorst191" d="M23.2,25.5c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C22.9,24.8,23.2,25.1,23.2,25.5z"/>
                    <path className="LogoDNDAColorst192" d="M23.3,25.5c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C23,24.8,23.3,25.1,23.3,25.5z"/>
                    <path className="LogoDNDAColorst193" d="M23.5,25.5c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C23.2,24.9,23.5,25.2,23.5,25.5z"/>
                    <path className="LogoDNDAColorst194" d="M23.6,25.5c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S23.6,25.2,23.6,25.5z" />
                    <path className="LogoDNDAColorst195" d="M23.7,25.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C23.4,24.9,23.7,25.2,23.7,25.6z"/>
                    <path className="LogoDNDAColorst196" d="M23.9,25.6c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S23.9,25.2,23.9,25.6z" />
                    <path className="LogoDNDAColorst197" d="M24,25.6c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S24,25.2,24,25.6z" />
                    <path className="LogoDNDAColorst198" d="M24.1,25.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C23.8,25,24.1,25.3,24.1,25.6z"/>
                    <path className="LogoDNDAColorst198" d="M24.2,25.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C23.9,25,24.2,25.3,24.2,25.6z"/>
                    <path className="LogoDNDAColorst199" d="M24.4,25.6c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S24.4,25.3,24.4,25.6z" />
                    <path className="LogoDNDAColorst200" d="M24.5,25.6c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S24.5,25.3,24.5,25.6z" />
                    <path className="LogoDNDAColorst201" d="M24.6,25.6c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7S23.6,25,24,25C24.3,25,24.6,25.3,24.6,25.6z" />
                    <path className="LogoDNDAColorst201" d="M24.8,25.6c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S24.8,25.3,24.8,25.6z" />
                    <path className="LogoDNDAColorst202" d="M24.9,25.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C24.6,25,24.9,25.3,24.9,25.6z"/>
                    <path className="LogoDNDAColorst203" d="M25,25.6c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S25,25.2,25,25.6z" />
                    <path className="LogoDNDAColorst204" d="M25.2,25.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C24.9,24.9,25.2,25.2,25.2,25.6z"/>
                    <path className="LogoDNDAColorst205" d="M25.3,25.6c0,0.4-0.3,0.7-0.7,0.7S24,25.9,24,25.6s0.3-0.6,0.7-0.6S25.3,25.2,25.3,25.6z" />
                    <path className="LogoDNDAColorst206" d="M25.4,25.5c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S25.4,25.2,25.4,25.5z" />
                    <path className="LogoDNDAColorst207" d="M25.6,25.5c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C25.3,24.8,25.6,25.1,25.6,25.5z"/>
                    <path className="LogoDNDAColorst208" d="M25.7,25.5c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C25.4,24.8,25.7,25.1,25.7,25.5z"/>
                    <path className="LogoDNDAColorst209" d="M25.8,25.4c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7C25.5,24.8,25.8,25.1,25.8,25.4z"
                    />
                    <path className="LogoDNDAColorst3" d="M26,25.4c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6C25.7,24.7,26,25,26,25.4z
								"/>
                    <path className="LogoDNDAColorst210" d="M26.1,25.3c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7
								C25.8,24.7,26.1,24.9,26.1,25.3z"/>
                    <path className="LogoDNDAColorst211" d="M26.2,25.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S26.2,24.9,26.2,25.2z" />
                    <path className="LogoDNDAColorst212" d="M26.4,25.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C26.1,24.5,26.4,24.8,26.4,25.2z"
                    />
                    <path className="LogoDNDAColorst213" d="M26.5,25.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C26.2,24.5,26.5,24.7,26.5,25.1z"/>
                    <path className="LogoDNDAColorst214" d="M26.7,25c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7C26.4,24.4,26.7,24.7,26.7,25z
								"/>
                    <path className="LogoDNDAColorst215" d="M26.8,25c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S26.8,24.6,26.8,25z" />
                    <path className="LogoDNDAColorst216" d="M26.9,24.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S26.9,24.5,26.9,24.9z" />
                    <path className="LogoDNDAColorst217" d="M27.1,24.8c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S27.1,24.5,27.1,24.8z" />
                    <path className="LogoDNDAColorst218" d="M27.2,24.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C26.9,24.1,27.2,24.4,27.2,24.7z"/>
                    <path className="LogoDNDAColorst219" d="M27.3,24.7c0,0.4-0.3,0.7-0.7,0.7S26,25,26,24.7s0.3-0.7,0.7-0.7S27.3,24.3,27.3,24.7z" />
                    <path className="LogoDNDAColorst220" d="M27.4,24.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C27.1,23.9,27.4,24.2,27.4,24.6z"/>
                    <path className="LogoDNDAColorst221" d="M27.6,24.5c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S27.6,24.2,27.6,24.5z
								"/>
                    <path className="LogoDNDAColorst222" d="M27.7,24.4c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C27.4,23.8,27.7,24.1,27.7,24.4z"/>
                    <path className="LogoDNDAColorst223" d="M27.8,24.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S27.8,24,27.8,24.4z" />
                    <path className="LogoDNDAColorst224" d="M27.9,24.3c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C27.6,23.6,27.9,23.9,27.9,24.3z"/>
                    <path className="LogoDNDAColorst225" d="M28,24.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6C27.7,23.6,28,23.8,28,24.2z" />
                    <path className="LogoDNDAColorst226" d="M28.1,24.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C27.8,23.5,28.1,23.8,28.1,24.1z"/>
                    <path className="LogoDNDAColorst227" d="M28.2,24c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C27.9,23.4,28.2,23.7,28.2,24z"/>
                    <path className="LogoDNDAColorst228" d="M28.3,24c0,0.4-0.3,0.7-0.7,0.7S27,24.3,27,24s0.3-0.7,0.7-0.7S28.3,23.6,28.3,24z" />
                    <path className="LogoDNDAColorst229" d="M28.4,23.9c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S28.4,23.5,28.4,23.9z" />
                    <path className="LogoDNDAColorst230" d="M28.5,23.8c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S28.5,23.4,28.5,23.8z" />
                    <path className="LogoDNDAColorst231" d="M28.6,23.7c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C28.3,23.1,28.6,23.3,28.6,23.7z"/>
                    <path className="LogoDNDAColorst232" d="M28.7,23.6c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S28.7,23.3,28.7,23.6z" />
                    <path className="LogoDNDAColorst233" d="M28.8,23.5c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S28.8,23.2,28.8,23.5z
								"/>
                    <path className="LogoDNDAColorst234" d="M28.9,23.5c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C28.6,22.8,28.9,23.1,28.9,23.5z"/>
                    <path className="LogoDNDAColorst235" d="M29,23.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S29,23,29,23.4z" />
                    <path className="LogoDNDAColorst236" d="M29.1,23.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C28.8,22.6,29.1,22.9,29.1,23.3z"/>
                    <path className="LogoDNDAColorst237" d="M29.2,23.2c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C28.9,22.5,29.2,22.8,29.2,23.2z"/>
                    <path className="LogoDNDAColorst238" d="M29.2,23.1c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S29.2,22.7,29.2,23.1z" />
                    <path className="LogoDNDAColorst239" d="M29.3,23c0,0.4-0.3,0.7-0.7,0.7S28,23.4,28,23s0.3-0.7,0.7-0.7S29.3,22.6,29.3,23z" />
                    <path className="LogoDNDAColorst240" d="M29.4,22.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S29.4,22.6,29.4,22.9z" />
                    <path className="LogoDNDAColorst241" d="M29.5,22.8c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S29.5,22.5,29.5,22.8z" />
                    <path className="LogoDNDAColorst242" d="M29.5,22.7c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6C29.2,22.1,29.5,22.4,29.5,22.7z"
                    />
                    <path className="LogoDNDAColorst243" d="M29.6,22.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C29.3,22,29.6,22.3,29.6,22.6z"/>
                    <path className="LogoDNDAColorst244" d="M29.7,22.5c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S29.7,22.2,29.7,22.5z" />
                    <path className="LogoDNDAColorst245" d="M29.7,22.5c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C29.5,21.8,29.7,22.1,29.7,22.5z"/>
                    <path className="LogoDNDAColorst246" d="M29.8,22.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S29.8,22,29.8,22.4z" />
                    <path className="LogoDNDAColorst247" d="M29.9,22.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C29.6,21.6,29.9,21.9,29.9,22.3z"/>
                    <path className="LogoDNDAColorst248" d="M29.9,22.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S29.9,21.8,29.9,22.2z" />
                    <path className="LogoDNDAColorst249" d="M30,22.1c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S30,21.7,30,22.1z" />
                    <path className="LogoDNDAColorst250" d="M30,22c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C29.8,21.3,30,21.6,30,22z" />
                    <path className="LogoDNDAColorst251" d="M30.1,21.9c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S30.1,21.5,30.1,21.9z" />
                    <path className="LogoDNDAColorst252" d="M30.1,21.8c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C29.9,21.1,30.1,21.4,30.1,21.8z"/>
                    <path className="LogoDNDAColorst253" d="M30.2,21.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C29.9,21,30.2,21.3,30.2,21.7z"/>
                    <path className="LogoDNDAColorst254" d="M30.2,21.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C29.9,20.9,30.2,21.2,30.2,21.6z"/>
                    <path className="LogoDNDAColorst255" d="M30.3,21.5c0,0.4-0.3,0.7-0.7,0.7S29,21.8,29,21.5s0.3-0.7,0.7-0.7S30.3,21.1,30.3,21.5z" />
                    <path className="LogoDNDAColorst256" d="M30.3,21.4c0,0.4-0.3,0.7-0.7,0.7S29,21.8,29,21.4c0-0.4,0.3-0.7,0.7-0.7S30.3,21,30.3,21.4z" />
                    <path className="LogoDNDAColorst257" d="M30.4,21.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C30.1,20.6,30.4,20.9,30.4,21.3z"/>
                    <path className="LogoDNDAColorst258" d="M30.4,21.2c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.6,0.7-0.6S30.4,20.8,30.4,21.2z" />
                    <path className="LogoDNDAColorst259" d="M30.4,21.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C30.1,20.4,30.4,20.7,30.4,21.1z"/>
                    <path className="LogoDNDAColorst260" d="M30.5,21c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S30.5,20.6,30.5,21z" />
                    <path className="LogoDNDAColorst261" d="M30.5,20.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C30.2,20.2,30.5,20.5,30.5,20.9z"/>
                    <path className="LogoDNDAColorst262" d="M30.5,20.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C30.2,20.1,30.5,20.4,30.5,20.8z"/>
                    <path className="LogoDNDAColorst263" d="M30.6,20.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C30.3,20,30.6,20.3,30.6,20.7z"/>
                    <path className="LogoDNDAColorst264" d="M30.6,20.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C30.3,19.9,30.6,20.2,30.6,20.6z"/>
                    <path className="LogoDNDAColorst265" d="M30.6,20.5c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C30.3,19.8,30.6,20.1,30.6,20.5z"/>
                    <path className="LogoDNDAColorst266" d="M30.7,20.4c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C30.4,19.7,30.7,20,30.7,20.4z"/>
                    <path className="LogoDNDAColorst267" d="M30.7,20.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C30.4,19.6,30.7,19.9,30.7,20.3z"/>
                    <path className="LogoDNDAColorst268" d="M30.7,20.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S30.7,19.8,30.7,20.2z" />
                    <path className="LogoDNDAColorst269" d="M30.7,20.1c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S30.7,19.7,30.7,20.1z" />
                    <path className="LogoDNDAColorst270" d="M30.7,20c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7C30.4,19.3,30.7,19.6,30.7,20z
								"/>
                    <path className="LogoDNDAColorst271" d="M30.7,19.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C30.4,19.2,30.7,19.5,30.7,19.9z"/>
                    <path className="LogoDNDAColorst272" d="M30.8,19.8c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S30.8,19.4,30.8,19.8z" />
                    <path className="LogoDNDAColorst273" d="M30.8,19.7c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C30.5,19,30.8,19.3,30.8,19.7z" />
                    <path className="LogoDNDAColorst274" d="M30.8,19.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C30.5,18.9,30.8,19.2,30.8,19.6z"/>
                    <path className="LogoDNDAColorst275" d="M30.8,19.5c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C30.5,18.8,30.8,19.1,30.8,19.5z"/>
                    <path className="LogoDNDAColorst276" d="M30.8,19.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S30.8,19,30.8,19.4z" />
                    <path className="LogoDNDAColorst277" d="M30.8,19.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S30.8,18.9,30.8,19.3z" />
                    <path className="LogoDNDAColorst278" d="M30.8,19.2c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6C30.5,18.5,30.8,18.8,30.8,19.2
								L30.8,19.2z"/>
                    <path className="LogoDNDAColorst279" d="M30.8,19.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C30.5,18.4,30.8,18.7,30.8,19.1z"/>
                    <path className="LogoDNDAColorst280" d="M30.8,19c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C30.5,18.3,30.8,18.6,30.8,19z"/>
                    <path className="LogoDNDAColorst281" d="M30.8,18.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6C30.5,18.2,30.8,18.5,30.8,18.9z"
                    />
                    <path className="LogoDNDAColorst282" d="M30.8,18.8c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S30.8,18.4,30.8,18.8z" />
                    <path className="LogoDNDAColorst283" d="M30.8,18.7c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S30.8,18.3,30.8,18.7z" />
                    <path className="LogoDNDAColorst284" d="M30.8,18.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C30.5,17.9,30.8,18.2,30.8,18.6z"/>
                    <path className="LogoDNDAColorst285" d="M30.8,18.5c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S30.8,18.1,30.8,18.5z" />
                    <path className="LogoDNDAColorst286" d="M30.8,18.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S30.8,18,30.8,18.4z" />
                    <path className="LogoDNDAColorst287" d="M30.8,18.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S30.8,17.9,30.8,18.3z" />
                    <path className="LogoDNDAColorst288" d="M30.7,18.2c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7
								C30.4,17.5,30.7,17.8,30.7,18.2z"/>
                    <path className="LogoDNDAColorst289" d="M30.7,18.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C30.4,17.4,30.7,17.7,30.7,18.1z"/>
                    <path className="LogoDNDAColorst290" d="M30.7,18c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S30.7,17.6,30.7,18z" />
                    <path className="LogoDNDAColorst291" d="M30.7,17.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C30.4,17.2,30.7,17.5,30.7,17.9z"/>
                    <path className="LogoDNDAColorst292" d="M30.7,17.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C30.4,17.1,30.7,17.4,30.7,17.8z"/>
                    <path className="LogoDNDAColorst293" d="M30.7,17.7c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6S29.6,17,30,17S30.7,17.3,30.7,17.7z" />
                    <path className="LogoDNDAColorst294" d="M30.6,17.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S30.6,17.2,30.6,17.6z" />
                    <path className="LogoDNDAColorst295" d="M30.6,17.5c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C30.3,16.8,30.6,17.1,30.6,17.5z"/>
                    <path className="LogoDNDAColorst296" d="M30.6,17.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S30.6,17,30.6,17.4z" />
                    <path className="LogoDNDAColorst297" d="M30.6,17.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C30.3,16.6,30.6,16.9,30.6,17.3z"/>
                    <path className="LogoDNDAColorst298" d="M30.5,17.2c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C30.2,16.5,30.5,16.8,30.5,17.2z"/>
                    <path className="LogoDNDAColorst299" d="M30.5,17.1c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S30.5,16.7,30.5,17.1z" />
                    <path className="LogoDNDAColorst300" d="M30.5,17c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S30.5,16.6,30.5,17z" />
                    <path className="LogoDNDAColorst301" d="M30.5,16.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C30.2,16.2,30.5,16.5,30.5,16.9z"/>
                    <path className="LogoDNDAColorst302" d="M30.4,16.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C30.1,16.1,30.4,16.4,30.4,16.8z"/>
                    <path className="LogoDNDAColorst303" d="M30.4,16.7c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S30.4,16.3,30.4,16.7z" />
                    <path className="LogoDNDAColorst304" d="M30.4,16.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C30.1,15.9,30.4,16.2,30.4,16.6z"/>
                    <path className="LogoDNDAColorst305" d="M30.3,16.5c0,0.4-0.3,0.7-0.7,0.7S29,16.9,29,16.5s0.3-0.6,0.7-0.6S30.3,16.1,30.3,16.5z" />
                    <path className="LogoDNDAColorst306" d="M30.3,16.4c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7C30,15.7,30.3,16,30.3,16.4z
								"/>
                    <path className="LogoDNDAColorst307" d="M30.2,16.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S30.2,15.9,30.2,16.3z" />
                    <path className="LogoDNDAColorst308" d="M30.2,16.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S30.2,15.8,30.2,16.2z" />
                    <path className="LogoDNDAColorst309" d="M30.2,16.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C29.9,15.5,30.2,15.8,30.2,16.1z"/>
                    <path className="LogoDNDAColorst310" d="M30.1,16c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S30.1,15.7,30.1,16z" />
                    <path className="LogoDNDAColorst311" d="M30.1,15.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C29.8,15.3,30.1,15.6,30.1,15.9z"/>
                    <path className="LogoDNDAColorst311" d="M30,15.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C29.7,15.2,30,15.5,30,15.8z"
                    />
                    <path className="LogoDNDAColorst312" d="M30,15.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C29.7,15.1,30,15.4,30,15.7z"/>
                    <path className="LogoDNDAColorst313" d="M29.9,15.7c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S29.9,15.3,29.9,15.7z" />
                    <path className="LogoDNDAColorst314" d="M29.9,15.6c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S29.9,15.2,29.9,15.6z" />
                    <path className="LogoDNDAColorst315" d="M29.9,15.5c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S29.9,15.1,29.9,15.5z" />
                    <path className="LogoDNDAColorst316" d="M29.8,15.4c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S29.8,15,29.8,15.4z" />
                    <path className="LogoDNDAColorst317" d="M29.7,15.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S29.7,14.9,29.7,15.3z" />
                    <path className="LogoDNDAColorst318" d="M29.7,15.2c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C29.4,14.6,29.7,14.9,29.7,15.2z"/>
                    <path className="LogoDNDAColorst319" d="M29.6,15.1c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.6,0.7-0.6S29.6,14.8,29.6,15.1z" />
                    <path className="LogoDNDAColorst320" d="M29.6,15c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S29.6,14.7,29.6,15z" />
                    <path className="LogoDNDAColorst321" d="M29.5,15c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6C29.2,14.3,29.5,14.6,29.5,15z
								"/>
                    <path className="LogoDNDAColorst322" d="M29.5,14.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C29.2,14.2,29.5,14.5,29.5,14.9z"/>
                    <path className="LogoDNDAColorst322" d="M29.4,14.8c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S29.4,14.4,29.4,14.8z" />
                    <path className="LogoDNDAColorst323" d="M29.4,14.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C29.1,14.1,29.4,14.3,29.4,14.7z"/>
                    <path className="LogoDNDAColorst324" d="M29.3,14.6c0,0.4-0.3,0.7-0.7,0.7S28,15,28,14.6s0.3-0.6,0.7-0.6S29.3,14.3,29.3,14.6z" />
                    <path className="LogoDNDAColorst325" d="M29.3,14.5c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S29.3,14.2,29.3,14.5z" />
                    <path className="LogoDNDAColorst326" d="M29.2,14.5c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S29.2,14.1,29.2,14.5z" />
                    <path className="LogoDNDAColorst327" d="M29.1,14.4c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S29.1,14,29.1,14.4z"
                    />
                    <path className="LogoDNDAColorst328" d="M29.1,14.3c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S29.1,13.9,29.1,14.3z" />
                    <path className="LogoDNDAColorst329" d="M29,14.2c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C28.7,13.6,29,13.9,29,14.2z"/>
                    <path className="LogoDNDAColorst330" d="M28.9,14.2c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C28.6,13.5,28.9,13.8,28.9,14.2z"/>
                    <path className="LogoDNDAColorst331" d="M28.9,14.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C28.6,13.4,28.9,13.7,28.9,14.1z"/>
                    <path className="LogoDNDAColorst332" d="M28.8,14c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.6,0.7-0.6
								C28.5,13.4,28.8,13.6,28.8,14z"/>
                    <path className="LogoDNDAColorst333" d="M28.7,13.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S28.7,13.6,28.7,13.9z" />
                    <path className="LogoDNDAColorst334" d="M28.7,13.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C28.4,13.2,28.7,13.5,28.7,13.9z"/>
                    <path className="LogoDNDAColorst334" d="M28.6,13.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C28.3,13.1,28.6,13.4,28.6,13.8z"/>
                    <path className="LogoDNDAColorst335" d="M28.5,13.7c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C28.3,13.1,28.5,13.4,28.5,13.7z"/>
                    <path className="LogoDNDAColorst336" d="M28.5,13.6c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C28.2,13,28.5,13.3,28.5,13.6z"/>
                    <path className="LogoDNDAColorst337" d="M28.4,13.6c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.6,0.7-0.6S28.4,13.2,28.4,13.6z" />
                    <path className="LogoDNDAColorst338" d="M28.3,13.5c0,0.4-0.3,0.7-0.7,0.7S27,13.9,27,13.5c0-0.4,0.3-0.6,0.7-0.6C28,12.9,28.3,13.1,28.3,13.5
								z"/>
                    <path className="LogoDNDAColorst339" d="M28.3,13.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S28.3,13.1,28.3,13.4z" />
                    <path className="LogoDNDAColorst340" d="M28.2,13.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S28.2,13,28.2,13.4z" />
                    <path className="LogoDNDAColorst341" d="M28.1,13.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C27.8,12.7,28.1,13,28.1,13.3z"/>
                    <path className="LogoDNDAColorst342" d="M28,13.3c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7C27.8,12.6,28,12.9,28,13.3z"
                    />
                    <path className="LogoDNDAColorst343" d="M28,13.2c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C27.7,12.5,28,12.8,28,13.2z"/>
                    <path className="LogoDNDAColorst344" d="M27.9,13.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C27.6,12.5,27.9,12.8,27.9,13.1z"/>
                    <path className="LogoDNDAColorst345" d="M27.8,13.1c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.6,0.7-0.6S27.8,12.7,27.8,13.1z" />
                    <path className="LogoDNDAColorst346" d="M27.7,13c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C27.5,12.4,27.7,12.6,27.7,13z"/>
                    <path className="LogoDNDAColorst347" d="M27.7,13c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S27.7,12.6,27.7,13z" />
                    <path className="LogoDNDAColorst348" d="M27.6,12.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S27.6,12.5,27.6,12.9z" />
                    <path className="LogoDNDAColorst348" d="M27.5,12.8c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C27.2,12.2,27.5,12.5,27.5,12.8z"/>
                    <path className="LogoDNDAColorst349" d="M27.4,12.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C27.1,12.1,27.4,12.4,27.4,12.8z"/>
                    <path className="LogoDNDAColorst350" d="M27.4,12.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C27.1,12.1,27.4,12.4,27.4,12.7z"/>
                    <path className="LogoDNDAColorst351" d="M27.3,12.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C27,12,27.3,12.3,27.3,12.7z
								"/>
                    <path className="LogoDNDAColorst352" d="M27.2,12.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C26.9,12,27.2,12.3,27.2,12.6z"/>
                    <path className="LogoDNDAColorst352" d="M27.1,12.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C26.8,11.9,27.1,12.2,27.1,12.6z"/>
                    <path className="LogoDNDAColorst353" d="M27,12.5c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S27,12.2,27,12.5z" />
                    <path className="LogoDNDAColorst354" d="M27,12.5c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S27,12.1,27,12.5z" />
                    <path className="LogoDNDAColorst355" d="M26.9,12.5c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S26.9,12.1,26.9,12.5z" />
                    <path className="LogoDNDAColorst356" d="M26.8,12.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C26.5,11.8,26.8,12,26.8,12.4z"/>
                    <path className="LogoDNDAColorst356" d="M26.7,12.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S26.7,12,26.7,12.4z" />
                    <path className="LogoDNDAColorst357" d="M26.6,12.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S26.6,12,26.6,12.3z" />
                    <path className="LogoDNDAColorst358" d="M26.5,12.3c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S26.5,11.9,26.5,12.3z
								"/>
                    <path className="LogoDNDAColorst359" d="M26.5,12.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C26.2,11.6,26.5,11.9,26.5,12.3z"/>
                    <path className="LogoDNDAColorst360" d="M26.4,12.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S26.4,11.9,26.4,12.2z" />
                    <path className="LogoDNDAColorst361" d="M26.3,12.2c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C26,11.5,26.3,11.8,26.3,12.2z"/>
                    <path className="LogoDNDAColorst362" d="M26.2,12.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S26.2,11.8,26.2,12.2z" />
                    <path className="LogoDNDAColorst362" d="M26.1,12.1c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S26.1,11.8,26.1,12.1z" />
                    <path className="LogoDNDAColorst363" d="M26,12.1c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S26,11.7,26,12.1z" />
                    <path className="LogoDNDAColorst364" d="M26,12.1c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S26,11.7,26,12.1z" />
                    <path className="LogoDNDAColorst365" d="M25.9,12c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C25.6,11.4,25.9,11.7,25.9,12z"/>
                    <path className="LogoDNDAColorst365" d="M25.8,12c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S25.8,11.6,25.8,12z" />
                    <path className="LogoDNDAColorst366" d="M25.7,12c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C25.4,11.3,25.7,11.6,25.7,12z"/>
                    <path className="LogoDNDAColorst367" d="M25.6,12c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C25.3,11.3,25.6,11.6,25.6,12z
								"/>
                    <path className="LogoDNDAColorst368" d="M25.5,11.9c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C25.2,11.3,25.5,11.6,25.5,11.9z"/>
                    <path className="LogoDNDAColorst368" d="M25.4,11.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S25.4,11.6,25.4,11.9z
								"/>
                    <path className="LogoDNDAColorst369" d="M25.4,11.9c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C25.1,11.3,25.4,11.6,25.4,11.9z"/>
                    <path className="LogoDNDAColorst369" d="M25.3,11.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S25.3,11.5,25.3,11.9z" />
                    <path className="LogoDNDAColorst370" d="M25.2,11.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C24.9,11.2,25.2,11.5,25.2,11.9z"/>
                    <path className="LogoDNDAColorst370" d="M25.1,11.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C24.8,11.2,25.1,11.5,25.1,11.9z"/>
                    <path className="LogoDNDAColorst371" d="M25,11.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6C24.7,11.2,25,11.5,25,11.9z"
                    />
                    <path className="LogoDNDAColorst371" d="M24.9,11.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S24.9,11.5,24.9,11.9z" />
                    <path className="LogoDNDAColorst372" d="M24.8,11.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C24.5,11.2,24.8,11.5,24.8,11.8z"/>
                    <path className="LogoDNDAColorst372" d="M24.7,11.8c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S24.7,11.5,24.7,11.8z" />
                    <path className="LogoDNDAColorst373" d="M24.7,11.8c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S24.7,11.5,24.7,11.8z" />
                    <path className="LogoDNDAColorst374" d="M24.6,11.8c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S24.6,11.5,24.6,11.8z" />
                    <path className="LogoDNDAColorst375" d="M24.5,11.8c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S24.5,11.5,24.5,11.8z" />
                    <path className="LogoDNDAColorst376" d="M24.4,11.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C24.1,11.2,24.4,11.5,24.4,11.8z"/>
                    <path className="LogoDNDAColorst377" d="M24.3,11.8c0,0.4-0.3,0.7-0.7,0.7S23,12.2,23,11.8c0-0.4,0.3-0.7,0.7-0.7S24.3,11.5,24.3,11.8z" />
                    <path className="LogoDNDAColorst378" d="M24.2,11.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S24.2,11.5,24.2,11.9z" />
                    <path className="LogoDNDAColorst379" d="M24.1,11.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C23.8,11.2,24.1,11.5,24.1,11.9z"/>
                    <path className="LogoDNDAColorst379" d="M24.1,11.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C23.8,11.2,24.1,11.5,24.1,11.9z"/>
                    <path className="LogoDNDAColorst380" d="M24,11.9c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S24,11.5,24,11.9z" />
                    <path className="LogoDNDAColorst381" d="M23.9,11.9c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S23.9,11.5,23.9,11.9z" />
                    <path className="LogoDNDAColorst382" d="M23.8,11.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S23.8,11.6,23.8,11.9z" />
                    <path className="LogoDNDAColorst381" d="M23.7,11.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S23.7,11.6,23.7,11.9z" />
                    <path className="LogoDNDAColorst381" d="M23.6,12c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S23.6,11.6,23.6,12z" />
                    <path className="LogoDNDAColorst381" d="M23.5,12c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C23.2,11.3,23.5,11.6,23.5,12z"/>
                    <path className="LogoDNDAColorst382" d="M23.4,12c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S23.4,11.6,23.4,12z" />
                    <path className="LogoDNDAColorst382" d="M23.4,12c0,0.4-0.3,0.7-0.7,0.7S22,12.4,22,12c0-0.4,0.3-0.7,0.7-0.7C23.1,11.4,23.4,11.7,23.4,12z" />
                    <path className="LogoDNDAColorst381" d="M23.1,12.1c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S23.1,11.7,23.1,12.1z" />
                    <path className="LogoDNDAColorst381" d="M22.9,12.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S22.9,11.8,22.9,12.2z" />
                    <path className="LogoDNDAColorst383" d="M22.7,12.2c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S22.7,11.9,22.7,12.2z" />
                    <path className="LogoDNDAColorst384" d="M22.5,12.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C22.2,11.7,22.5,12,22.5,12.3z"/>
                    <path className="LogoDNDAColorst384" d="M22.3,12.4c0,0.4-0.3,0.7-0.7,0.7S21,12.7,21,12.4s0.3-0.7,0.7-0.7S22.3,12,22.3,12.4z" />
                    <path className="LogoDNDAColorst385" d="M22.1,12.5c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S22.1,12.1,22.1,12.5z" />
                    <path className="LogoDNDAColorst386" d="M21.9,12.5c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C21.6,11.9,21.9,12.2,21.9,12.5z"/>
                    <path className="LogoDNDAColorst386" d="M21.7,12.6c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S21.7,12.3,21.7,12.6z" />
                    <path className="LogoDNDAColorst387" d="M21.6,12.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C21.3,12,21.6,12.3,21.6,12.7z"/>
                    <path className="LogoDNDAColorst387" d="M21.4,12.8c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C21.1,12.1,21.4,12.4,21.4,12.8z"/>
                    <path className="LogoDNDAColorst388" d="M21.2,12.9c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C20.9,12.2,21.2,12.5,21.2,12.9z"/>
                    <path className="LogoDNDAColorst389" d="M21,12.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S21,12.6,21,12.9z" />
                    <path className="LogoDNDAColorst389" d="M20.8,13c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S20.8,12.7,20.8,13z" />
                    <path className="LogoDNDAColorst390" d="M20.7,13.1c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C20.4,12.5,20.7,12.8,20.7,13.1z"/>
                    <path className="LogoDNDAColorst391" d="M20.5,13.2c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S20.5,12.8,20.5,13.2z" />
                    <path className="LogoDNDAColorst391" d="M20.3,13.3c0,0.4-0.3,0.7-0.7,0.7S19,13.6,19,13.3c0-0.4,0.3-0.7,0.7-0.7C20,12.6,20.3,12.9,20.3,13.3
								z"/>
                    <path className="LogoDNDAColorst392" d="M20.2,13.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C19.9,12.7,20.2,13,20.2,13.4z"/>
                    <path className="LogoDNDAColorst393" d="M20,13.5c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C19.7,12.8,20,13.1,20,13.5z"/>
                    <path className="LogoDNDAColorst393" d="M19.8,13.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C19.5,12.9,19.8,13.2,19.8,13.6z"/>
                    <path className="LogoDNDAColorst394" d="M19.7,13.7c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S19.7,13.3,19.7,13.7z" />
                    <path className="LogoDNDAColorst395" d="M19.5,13.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S19.5,13.4,19.5,13.7z
								"/>
                    <path className="LogoDNDAColorst395" d="M19.4,13.8c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S19.4,13.5,19.4,13.8z" />
                    <path className="LogoDNDAColorst396" d="M19.2,13.9c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7
								C18.9,13.3,19.2,13.6,19.2,13.9z"/>
                    <path className="LogoDNDAColorst397" d="M19.1,14c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S19.1,13.7,19.1,14z" />
                    <path className="LogoDNDAColorst398" d="M18.9,14.1c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S18.9,13.8,18.9,14.1z" />
                    <path className="LogoDNDAColorst398" d="M18.8,14.2c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S18.8,13.9,18.8,14.2z
								"/>
                    <path className="LogoDNDAColorst399" d="M18.7,14.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S18.7,14,18.7,14.3z" />
                    <path className="LogoDNDAColorst400" d="M18.5,14.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S18.5,14.1,18.5,14.4z" />
                    <path className="LogoDNDAColorst400" d="M18.4,14.5c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C18.1,13.9,18.4,14.2,18.4,14.5z"/>
                    <path className="LogoDNDAColorst401" d="M18.3,14.6c0,0.4-0.3,0.6-0.7,0.6S17,15,17,14.6c0-0.4,0.3-0.6,0.7-0.6S18.3,14.3,18.3,14.6z" />
                    <path className="LogoDNDAColorst402" d="M18.2,14.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S18.2,14.4,18.2,14.7z
								"/>
                    <path className="LogoDNDAColorst402" d="M18,14.8c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S18,14.5,18,14.8z" />
                    <path className="LogoDNDAColorst403" d="M17.9,14.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C17.6,14.3,17.9,14.6,17.9,14.9z"/>
                    <path className="LogoDNDAColorst404" d="M17.8,15c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S17.8,14.7,17.8,15z" />
                    <path className="LogoDNDAColorst405" d="M17.7,15.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S17.7,14.8,17.7,15.2z" />
                    <path className="LogoDNDAColorst406" d="M17.6,15.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C17.3,14.6,17.6,14.9,17.6,15.3z"/>
                    <path className="LogoDNDAColorst407" d="M17.5,15.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S17.5,15,17.5,15.4z" />
                    <path className="LogoDNDAColorst408" d="M17.4,15.5c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C17.1,14.8,17.4,15.1,17.4,15.5z"/>
                    <path className="LogoDNDAColorst408" d="M17.3,15.6c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S17.3,15.2,17.3,15.6z" />
                    <path className="LogoDNDAColorst409" d="M17.2,15.7c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S17.2,15.3,17.2,15.7z" />
                    <path className="LogoDNDAColorst410" d="M17.1,15.8c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S17.1,15.5,17.1,15.8z
								"/>
                    <path className="LogoDNDAColorst411" d="M17,15.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6C16.7,15.3,17,15.6,17,15.9z"
                    />
                    <path className="LogoDNDAColorst412" d="M16.9,16c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S16.9,15.7,16.9,16z" />
                    <path className="LogoDNDAColorst413" d="M16.8,16.2c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C16.5,15.5,16.8,15.8,16.8,16.2z"/>
                    <path className="LogoDNDAColorst414" d="M16.7,16.3c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C16.4,15.6,16.7,15.9,16.7,16.3z"/>
                    <path className="LogoDNDAColorst414" d="M16.6,16.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S16.6,16,16.6,16.4z" />
                    <path className="LogoDNDAColorst415" d="M16.5,16.5c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C16.2,15.8,16.5,16.1,16.5,16.5z"/>
                    <path className="LogoDNDAColorst416" d="M16.4,16.6c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7
								C16.1,16,16.4,16.3,16.4,16.6z"/>
                    <path className="LogoDNDAColorst417" d="M16.4,16.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C16.1,16.1,16.4,16.4,16.4,16.7z"/>
                    <path className="LogoDNDAColorst418" d="M16.3,16.8c0,0.4-0.3,0.7-0.7,0.7S15,17.2,15,16.8c0-0.4,0.3-0.6,0.7-0.6C16,16.2,16.3,16.5,16.3,16.8
								z"/>
                    <path className="LogoDNDAColorst419" d="M16.2,17c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S16.2,16.6,16.2,17z" />
                    <path className="LogoDNDAColorst420" d="M16.1,17.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C15.8,16.4,16.1,16.7,16.1,17.1z"/>
                    <path className="LogoDNDAColorst421" d="M16.1,17.2c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C15.8,16.5,16.1,16.8,16.1,17.2z"/>
                    <path className="LogoDNDAColorst421" d="M16,17.3c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S16,17,16,17.3z" />
                    <path className="LogoDNDAColorst422" d="M15.9,17.4c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C15.6,16.8,15.9,17.1,15.9,17.4z"/>
                    <path className="LogoDNDAColorst423" d="M15.9,17.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C15.6,16.9,15.9,17.2,15.9,17.6z"/>
                    <path className="LogoDNDAColorst424" d="M15.8,17.7c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S15.8,17.3,15.8,17.7z" />
                    <path className="LogoDNDAColorst424" d="M15.8,17.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C15.5,17.1,15.8,17.4,15.8,17.8z"/>
                    <path className="LogoDNDAColorst425" d="M15.7,17.9c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C15.4,17.3,15.7,17.6,15.7,17.9z"/>
                    <path className="LogoDNDAColorst426" d="M15.7,18c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S15.7,17.7,15.7,18z" />
                    <path className="LogoDNDAColorst427" d="M15.6,18.2c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C15.3,17.5,15.6,17.8,15.6,18.2z"/>
                    <path className="LogoDNDAColorst428" d="M15.6,18.3c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C15.3,17.6,15.6,17.9,15.6,18.3z"/>
                    <path className="LogoDNDAColorst429" d="M15.5,18.4c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C15.2,17.7,15.5,18,15.5,18.4z"/>
                    <path className="LogoDNDAColorst430" d="M15.5,18.5c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S15.5,18.2,15.5,18.5z" />
                    <path className="LogoDNDAColorst430" d="M15.4,18.6c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S15.4,18.3,15.4,18.6z" />
                    <path className="LogoDNDAColorst431" d="M15.4,18.8c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C15.1,18.1,15.4,18.4,15.4,18.8z"/>
                    <path className="LogoDNDAColorst432" d="M15.4,18.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6C15.1,18.2,15.4,18.5,15.4,18.9z"
                    />
                    <path className="LogoDNDAColorst433" d="M15.3,19c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C15.1,18.4,15.3,18.6,15.3,19z
								"/>
                    <path className="LogoDNDAColorst434" d="M15.3,19.1c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C15,18.5,15.3,18.8,15.3,19.1z"/>
                    <path className="LogoDNDAColorst435" d="M15.3,19.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S15.3,18.9,15.3,19.3z" />
                    <path className="LogoDNDAColorst436" d="M15.3,19.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7C15,18.7,15.3,19,15.3,19.4z
								"/>
                    <path className="LogoDNDAColorst437" d="M15.2,19.5c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C14.9,18.8,15.2,19.1,15.2,19.5z"/>
                    <path className="LogoDNDAColorst438" d="M15.2,19.6c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S15.2,19.3,15.2,19.6z" />
                    <path className="LogoDNDAColorst439" d="M15.2,19.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C14.9,19.1,15.2,19.4,15.2,19.7z"/>
                    <path className="LogoDNDAColorst440" d="M15.2,19.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C14.9,19.2,15.2,19.5,15.2,19.9z"/>
                    <path className="LogoDNDAColorst441" d="M15.2,20c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C14.9,19.3,15.2,19.6,15.2,20z"/>
                    <path className="LogoDNDAColorst442" d="M15.2,20.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C14.9,19.5,15.2,19.7,15.2,20.1z"/>
                    <path className="LogoDNDAColorst442" d="M15.1,20.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S15.1,19.9,15.1,20.2z" />
                    <path className="LogoDNDAColorst443" d="M15.1,20.4c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7C14.8,19.7,15.1,20,15.1,20.4z" />
                    <path className="LogoDNDAColorst444" d="M15.1,20.5c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7
								C14.8,19.8,15.1,20.1,15.1,20.5z"/>
                    <path className="LogoDNDAColorst445" d="M15.1,20.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C14.8,20,15.1,20.2,15.1,20.6z"/>
                    <path className="LogoDNDAColorst446" d="M15.1,20.7c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.6,0.7-0.6
								C14.8,20.1,15.1,20.4,15.1,20.7z"/>
                    <path className="LogoDNDAColorst447" d="M15.1,20.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C14.8,20.2,15.1,20.5,15.1,20.8z"/>
                    <path className="LogoDNDAColorst448" d="M15.1,21c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C14.8,20.3,15.1,20.6,15.1,21z"/>
                    <path className="LogoDNDAColorst449" d="M15.1,21.1c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C14.8,20.4,15.1,20.7,15.1,21.1z"/>
                    <path className="LogoDNDAColorst450" d="M15.1,21.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S15.1,20.9,15.1,21.2z" />
                    <path className="LogoDNDAColorst451" d="M15.1,21.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S15.1,21,15.1,21.3z"
                    />
                    <path className="LogoDNDAColorst451" d="M15.2,21.5c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7
								C14.9,20.8,15.2,21.1,15.2,21.5z"/>
                    <path className="LogoDNDAColorst452" d="M15.2,21.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C14.9,20.9,15.2,21.2,15.2,21.6z"/>
                    <path className="LogoDNDAColorst453" d="M15.2,21.7c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C14.9,21,15.2,21.3,15.2,21.7z"/>
                    <path className="LogoDNDAColorst454" d="M15.2,21.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C14.9,21.2,15.2,21.5,15.2,21.8z"/>
                    <path className="LogoDNDAColorst455" d="M15.2,21.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S15.2,21.6,15.2,21.9z" />
                    <path className="LogoDNDAColorst456" d="M15.2,22.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C14.9,21.4,15.2,21.7,15.2,22.1z"/>
                    <path className="LogoDNDAColorst457" d="M15.3,22.2c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C15,21.5,15.3,21.8,15.3,22.2z"/>
                    <path className="LogoDNDAColorst458" d="M15.3,22.3c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.6,0.7-0.6
								C15,21.7,15.3,21.9,15.3,22.3z"/>
                    <path className="LogoDNDAColorst459" d="M15.3,22.4c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C15,21.8,15.3,22.1,15.3,22.4z"/>
                    <path className="LogoDNDAColorst460" d="M15.3,22.5c0,0.4-0.3,0.7-0.7,0.7S14,22.9,14,22.5c0-0.4,0.3-0.7,0.7-0.7C15,21.9,15.3,22.2,15.3,22.5
								z"/>
                    <path className="LogoDNDAColorst460" d="M15.4,22.7c0,0.4-0.3,0.6-0.7,0.6S14,23,14,22.7s0.3-0.7,0.7-0.7S15.4,22.3,15.4,22.7z" />
                    <path className="LogoDNDAColorst461" d="M15.4,22.8c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7
								C15.1,22.1,15.4,22.4,15.4,22.8z"/>
                    <path className="LogoDNDAColorst462" d="M15.4,22.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C15.1,22.2,15.4,22.5,15.4,22.9z"/>
                    <path className="LogoDNDAColorst463" d="M15.5,23c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6C15.2,22.4,15.5,22.7,15.5,23z
								"/>
                    <path className="LogoDNDAColorst464" d="M15.5,23.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C15.2,22.5,15.5,22.8,15.5,23.1z"/>
                    <path className="LogoDNDAColorst464" d="M15.5,23.2c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C15.2,22.6,15.5,22.9,15.5,23.2z"/>
                    <path className="LogoDNDAColorst465" d="M15.6,23.4c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C15.3,22.7,15.6,23,15.6,23.4z"/>
                    <path className="LogoDNDAColorst466" d="M15.6,23.5c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C15.3,22.8,15.6,23.1,15.6,23.5z"/>
                    <path className="LogoDNDAColorst467" d="M15.7,23.6c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S15.7,23.2,15.7,23.6z" />
                    <path className="LogoDNDAColorst468" d="M15.7,23.7c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S15.7,23.3,15.7,23.7z" />
                    <path className="LogoDNDAColorst469" d="M15.8,23.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C15.5,23.2,15.8,23.5,15.8,23.8z"/>
                    <path className="LogoDNDAColorst469" d="M15.8,23.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C15.5,23.3,15.8,23.6,15.8,23.9z"/>
                    <path className="LogoDNDAColorst470" d="M15.9,24c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S15.9,23.7,15.9,24z" />
                    <path className="LogoDNDAColorst471" d="M15.9,24.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C15.6,23.5,15.9,23.8,15.9,24.1z"/>
                    <path className="LogoDNDAColorst472" d="M16,24.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S16,23.9,16,24.3z" />
                    <path className="LogoDNDAColorst473" d="M16,24.4c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C15.7,23.7,16,24,16,24.4z"/>
                    <path className="LogoDNDAColorst474" d="M16.1,24.5c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S16.1,24.1,16.1,24.5z" />
                    <path className="LogoDNDAColorst475" d="M16.1,24.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C15.8,23.9,16.1,24.2,16.1,24.6z"/>
                    <path className="LogoDNDAColorst476" d="M16.2,24.7c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S16.2,24.3,16.2,24.7z" />
                    <path className="LogoDNDAColorst477" d="M16.3,24.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S16.3,24.4,16.3,24.8z" />
                    <path className="LogoDNDAColorst478" d="M16.3,24.9c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7
								C16,24.3,16.3,24.5,16.3,24.9z"/>
                    <path className="LogoDNDAColorst479" d="M16.4,25c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6C16.1,24.4,16.4,24.7,16.4,25z
								"/>
                    <path className="LogoDNDAColorst479" d="M16.5,25.1c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7C16.2,24.5,16.5,24.8,16.5,25.1z"
                    />
                    <path className="LogoDNDAColorst480" d="M16.5,25.2c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S16.5,24.9,16.5,25.2z" />
                    <path className="LogoDNDAColorst481" d="M16.6,25.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S16.6,25,16.6,25.3z" />
                    <path className="LogoDNDAColorst482" d="M16.7,25.4c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C16.4,24.8,16.7,25.1,16.7,25.4z"/>
                    <path className="LogoDNDAColorst483" d="M16.8,25.5c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S16.8,25.2,16.8,25.5z
								"/>
                    <path className="LogoDNDAColorst484" d="M16.8,25.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C16.5,25,16.8,25.3,16.8,25.6z"/>
                    <path className="LogoDNDAColorst484" d="M16.9,25.7c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C16.6,25.1,16.9,25.4,16.9,25.7z"/>
                    <path className="LogoDNDAColorst485" d="M17,25.8c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7C16.7,25.2,17,25.5,17,25.8z"
                    />
                    <path className="LogoDNDAColorst486" d="M17.1,25.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S17.1,25.6,17.1,25.9z" />
                    <path className="LogoDNDAColorst487" d="M17.2,26c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S17.2,25.7,17.2,26z" />
                    <path className="LogoDNDAColorst488" d="M17.2,26.1c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C16.9,25.5,17.2,25.7,17.2,26.1z"/>
                    <path className="LogoDNDAColorst489" d="M17.3,26.2c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S17.3,25.8,17.3,26.2z" />
                    <path className="LogoDNDAColorst490" d="M17.4,26.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S17.4,25.9,17.4,26.3z" />
                    <path className="LogoDNDAColorst490" d="M17.5,26.4c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S17.5,26,17.5,26.4z" />
                    <path className="LogoDNDAColorst491" d="M17.6,26.5c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S17.6,26.1,17.6,26.5z" />
                    <path className="LogoDNDAColorst492" d="M17.7,26.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C17.4,25.9,17.7,26.2,17.7,26.6z"/>
                    <path className="LogoDNDAColorst493" d="M17.8,26.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C17.5,26,17.8,26.3,17.8,26.7z"/>
                    <path className="LogoDNDAColorst494" d="M17.9,26.7c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C17.6,26.1,17.9,26.4,17.9,26.7z"/>
                    <path className="LogoDNDAColorst495" d="M18,26.8c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S18,26.5,18,26.8z" />
                    <path className="LogoDNDAColorst496" d="M18,26.9c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7C17.8,26.3,18,26.6,18,26.9z"
                    />
                    <path className="LogoDNDAColorst496" d="M18.1,27c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C17.8,26.3,18.1,26.6,18.1,27z"/>
                    <path className="LogoDNDAColorst497" d="M18.2,27.1c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S18.2,26.7,18.2,27.1z" />
                    <path className="LogoDNDAColorst498" d="M18.3,27.2c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C18.1,26.5,18.3,26.8,18.3,27.2z"/>
                    <path className="LogoDNDAColorst499" d="M18.4,27.2c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C18.1,26.6,18.4,26.9,18.4,27.2z"/>
                    <path className="LogoDNDAColorst500" d="M18.5,27.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C18.3,26.7,18.5,27,18.5,27.3z"/>
                    <path className="LogoDNDAColorst501" d="M18.6,27.4c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S18.6,27,18.6,27.4z" />
                    <path className="LogoDNDAColorst502" d="M18.8,27.5c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S18.8,27.1,18.8,27.5z" />
                    <path className="LogoDNDAColorst503" d="M18.9,27.5c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S18.9,27.2,18.9,27.5z" />
                    <path className="LogoDNDAColorst504" d="M19,27.6c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S19,27.3,19,27.6z" />
                    <path className="LogoDNDAColorst505" d="M19.1,27.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S19.1,27.3,19.1,27.7z
								"/>
                    <path className="LogoDNDAColorst506" d="M19.2,27.8c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S19.2,27.4,19.2,27.8z" />
                    <path className="LogoDNDAColorst506" d="M19.3,27.8c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C19,27.2,19.3,27.5,19.3,27.8z"/>
                    <path className="LogoDNDAColorst507" d="M19.4,27.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S19.4,27.5,19.4,27.9z
								"/>
                    <path className="LogoDNDAColorst508" d="M19.5,28c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S19.5,27.6,19.5,28z" />
                    <path className="LogoDNDAColorst509" d="M19.6,28c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7C19.4,27.4,19.6,27.7,19.6,28z
								"/>
                    <path className="LogoDNDAColorst510" d="M19.8,28.1c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S19.8,27.7,19.8,28.1z" />
                    <path className="LogoDNDAColorst511" d="M19.9,28.2c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S19.9,27.8,19.9,28.2z" />
                    <path className="LogoDNDAColorst512" d="M20,28.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S20,27.9,20,28.2z" />
                    <path className="LogoDNDAColorst513" d="M20.1,28.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S20.1,27.9,20.1,28.3z" />
                    <path className="LogoDNDAColorst514" d="M20.2,28.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S20.2,28,20.2,28.3z" />
                    <path className="LogoDNDAColorst515" d="M20.4,28.4c0,0.4-0.3,0.6-0.7,0.6S19,28.7,19,28.4s0.3-0.6,0.7-0.6S20.4,28,20.4,28.4z" />
                    <path className="LogoDNDAColorst516" d="M20.5,28.4c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C20.2,27.8,20.5,28.1,20.5,28.4z"/>
                    <path className="LogoDNDAColorst517" d="M20.6,28.5c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S20.6,28.1,20.6,28.5z" />
                    <path className="LogoDNDAColorst518" d="M20.7,28.5c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C20.4,27.9,20.7,28.2,20.7,28.5z"/>
                    <path className="LogoDNDAColorst519" d="M20.9,28.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S20.9,28.2,20.9,28.6z" />
                    <path className="LogoDNDAColorst520" d="M21,28.6c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6S20,28,20.3,28S21,28.3,21,28.6z" />
                    <path className="LogoDNDAColorst521" d="M21.1,28.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S21.1,28.3,21.1,28.7z" />
                    <path className="LogoDNDAColorst522" d="M21.2,28.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C20.9,28.1,21.2,28.4,21.2,28.7z"/>
                    <path className="LogoDNDAColorst523" d="M21.4,28.8c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7
								C21.1,28.1,21.4,28.4,21.4,28.8z"/>
                    <path className="LogoDNDAColorst524" d="M21.5,28.8c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S21.5,28.4,21.5,28.8z" />
                    <path className="LogoDNDAColorst525" d="M21.6,28.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C21.3,28.2,21.6,28.5,21.6,28.8z"/>
                    <path className="LogoDNDAColorst526" d="M21.8,28.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C21.5,28.2,21.8,28.5,21.8,28.9z"/>
                    <path className="LogoDNDAColorst527" d="M21.9,28.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S21.9,28.6,21.9,28.9z" />
                    <path className="LogoDNDAColorst528" d="M22,28.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C21.7,28.3,22,28.6,22,28.9z"
                    />
                    <path className="LogoDNDAColorst529" d="M22.2,29c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S22.2,28.6,22.2,29z" />
                    <path className="LogoDNDAColorst530" d="M22.3,29c0,0.4-0.3,0.6-0.7,0.6S21,29.4,21,29c0-0.4,0.3-0.7,0.7-0.7C22,28.4,22.3,28.7,22.3,29z" />
                    <path className="LogoDNDAColorst531" d="M22.4,29c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C22.1,28.4,22.4,28.7,22.4,29z
								"/>
                    <path className="LogoDNDAColorst532" d="M22.6,29.1c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S22.6,28.7,22.6,29.1z" />
                    <path className="LogoDNDAColorst533" d="M22.7,29.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C22.4,28.4,22.7,28.7,22.7,29.1z"/>
                    <path className="LogoDNDAColorst534" d="M22.9,29.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C22.6,28.5,22.9,28.7,22.9,29.1z"/>
                    <path className="LogoDNDAColorst535" d="M23,29.1c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.6,0.7-0.6
								C22.7,28.5,23,28.8,23,29.1z"/>
                    <path className="LogoDNDAColorst536" d="M23.1,29.1c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S23.1,28.8,23.1,29.1z" />
                    <path className="LogoDNDAColorst537" d="M23.2,29.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S23.2,28.8,23.2,29.2z" />
                    <path className="LogoDNDAColorst538" d="M23.3,29.2c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S23.3,28.8,23.3,29.2z
								"/>
                    <path className="LogoDNDAColorst539" d="M23.4,29.2c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C23.1,28.6,23.4,28.8,23.4,29.2z"/>
                    <path className="LogoDNDAColorst540" d="M23.5,29.2c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C23.2,28.6,23.5,28.9,23.5,29.2z"/>
                    <path className="LogoDNDAColorst541" d="M23.6,29.2c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S23.6,28.9,23.6,29.2z" />
                    <path className="LogoDNDAColorst542" d="M23.8,29.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C23.5,28.6,23.8,28.9,23.8,29.3z"/>
                    <path className="LogoDNDAColorst543" d="M23.9,29.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S23.9,28.9,23.9,29.3z
								"/>
                    <path className="LogoDNDAColorst544" d="M24,29.3c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C23.7,28.6,24,28.9,24,29.3z"/>
                    <path className="LogoDNDAColorst545" d="M24.1,29.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C23.8,28.6,24.1,28.9,24.1,29.3z"/>
                    <path className="LogoDNDAColorst546" d="M24.2,29.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S24.2,29,24.2,29.3z" />
                    <path className="LogoDNDAColorst547" d="M24.3,29.3c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.6,0.7-0.6
								C24,28.7,24.3,29,24.3,29.3z"/>
                    <path className="LogoDNDAColorst548" d="M24.4,29.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C24.1,28.7,24.4,29,24.4,29.3z"/>
                    <path className="LogoDNDAColorst548" d="M24.5,29.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C24.2,28.7,24.5,29,24.5,29.3z"/>
                    <path className="LogoDNDAColorst549" d="M24.6,29.3c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S24.6,29,24.6,29.3z" />
                    <path className="LogoDNDAColorst550" d="M24.7,29.4c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C24.4,28.7,24.7,29,24.7,29.4z"/>
                    <path className="LogoDNDAColorst551" d="M24.8,29.4c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C24.5,28.7,24.8,29,24.8,29.4z"/>
                    <path className="LogoDNDAColorst552" d="M24.9,29.4c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S24.9,29,24.9,29.4z"
                    />
                    <path className="LogoDNDAColorst553" d="M25,29.4c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S25,29,25,29.4z" />
                    <path className="LogoDNDAColorst554" d="M25.1,29.4c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C24.8,28.7,25.1,29,25.1,29.4z"/>
                    <path className="LogoDNDAColorst555" d="M25.2,29.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S25.2,29,25.2,29.4z" />
                    <path className="LogoDNDAColorst556" d="M25.3,29.4c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C25,28.7,25.3,29,25.3,29.4z"/>
                    <path className="LogoDNDAColorst557" d="M25.4,29.4c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S25.4,29,25.4,29.4z" />
                    <path className="LogoDNDAColorst558" d="M25.5,29.4c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.6,0.7-0.6
								C25.2,28.7,25.5,29,25.5,29.4z"/>
                    <path className="LogoDNDAColorst559" d="M25.6,29.4c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.6,0.7-0.6
								C25.3,28.7,25.6,29,25.6,29.4z"/>
                    <path className="LogoDNDAColorst560" d="M25.7,29.4c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.6,0.7-0.6S25.7,29,25.7,29.4z" />
                    <path className="LogoDNDAColorst561" d="M25.8,29.4c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S25.8,29,25.8,29.4z" />
                    <path className="LogoDNDAColorst562" d="M25.9,29.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S25.9,29,25.9,29.4z" />
                    <path className="LogoDNDAColorst563" d="M26,29.4c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C25.7,28.7,26,29,26,29.4z" />
                    <path className="LogoDNDAColorst564" d="M26.1,29.4c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S26.1,29,26.1,29.4z"
                    />
                    <path className="LogoDNDAColorst565" d="M26.2,29.4c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C25.9,28.7,26.2,29,26.2,29.4z"/>
                    <path className="LogoDNDAColorst565" d="M26.3,29.4c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6C26,28.7,26.3,29,26.3,29.4z
								"/>
                    <path className="LogoDNDAColorst566" d="M26.4,29.4c0,0.4-0.3,0.7-0.7,0.7S25,29.7,25,29.4c0-0.4,0.3-0.7,0.7-0.7S26.4,29,26.4,29.4z" />
                    <path className="LogoDNDAColorst567" d="M26.5,29.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S26.5,29,26.5,29.4z" />
                    <path className="LogoDNDAColorst568" d="M26.5,29.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S26.5,29,26.5,29.3z" />
                    <path className="LogoDNDAColorst569" d="M26.6,29.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C26.3,28.7,26.6,29,26.6,29.3z"/>
                    <path className="LogoDNDAColorst570" d="M26.7,29.3c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S26.7,29,26.7,29.3z" />
                    <path className="LogoDNDAColorst571" d="M26.8,29.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C26.5,28.7,26.8,29,26.8,29.3z"/>
                    <path className="LogoDNDAColorst571" d="M26.9,29.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6C26.6,28.7,26.9,28.9,26.9,29.3z"
                    />
                    <path className="LogoDNDAColorst572" d="M27,29.3c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7C26.7,28.6,27,28.9,27,29.3z"
                    />
                    <path className="LogoDNDAColorst572" d="M27.1,29.3c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S27.1,28.9,27.1,29.3z
								"/>
                    <path className="LogoDNDAColorst573" d="M27.2,29.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C26.9,28.6,27.2,28.9,27.2,29.3z"/>
                    <path className="LogoDNDAColorst574" d="M27.3,29.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C26.9,28.6,27.3,28.9,27.3,29.3z"/>
                    <path className="LogoDNDAColorst575" d="M27.3,29.2c0,0.4-0.3,0.7-0.7,0.7S26,29.6,26,29.2c0-0.4,0.3-0.7,0.7-0.7C27,28.6,27.3,28.9,27.3,29.2
								z"/>
                    <path className="LogoDNDAColorst576" d="M27.4,29.2c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.6,0.7-0.6
								C27.1,28.6,27.4,28.9,27.4,29.2z"/>
                    <path className="LogoDNDAColorst577" d="M27.5,29.2c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7
								C27.2,28.6,27.5,28.9,27.5,29.2z"/>
                    <path className="LogoDNDAColorst578" d="M27.6,29.2c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C27.3,28.5,27.6,28.8,27.6,29.2z"/>
                    <path className="LogoDNDAColorst579" d="M27.7,29.2c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S27.7,28.8,27.7,29.2z" />
                    <path className="LogoDNDAColorst580" d="M27.7,29.2c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S27.7,28.8,27.7,29.2z" />
                    <path className="LogoDNDAColorst581" d="M27.8,29.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C27.5,28.5,27.8,28.8,27.8,29.1z"/>
                    <path className="LogoDNDAColorst582" d="M27.9,29.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C27.6,28.5,27.9,28.8,27.9,29.1z"/>
                    <path className="LogoDNDAColorst583" d="M28,29.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C27.7,28.5,28,28.7,28,29.1z"
                    />
                    <path className="LogoDNDAColorst584" d="M28.1,29.1c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S28.1,28.7,28.1,29.1z" />
                    <path className="LogoDNDAColorst585" d="M28.1,29.1c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.6,0.7-0.6S28.1,28.7,28.1,29.1z" />
                    <path className="LogoDNDAColorst585" d="M28.2,29c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S28.2,28.7,28.2,29z" />
                    <path className="LogoDNDAColorst586" d="M28.3,29c0,0.4-0.3,0.7-0.7,0.7S27,29.4,27,29c0-0.4,0.3-0.6,0.7-0.6S28.3,28.7,28.3,29z" />
                    <path className="LogoDNDAColorst587" d="M28.4,29c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6C28.1,28.3,28.4,28.6,28.4,29z
								"/>
                    <path className="LogoDNDAColorst588" d="M28.5,29c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C28.2,28.3,28.5,28.6,28.5,29z"/>
                    <path className="LogoDNDAColorst588" d="M28.5,29c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S28.5,28.6,28.5,29z" />
                    <path className="LogoDNDAColorst589" d="M28.6,28.9c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C28.3,28.3,28.6,28.6,28.6,28.9z"/>
                    <path className="LogoDNDAColorst590" d="M28.7,28.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C28.4,28.3,28.7,28.5,28.7,28.9z"/>
                    <path className="LogoDNDAColorst591" d="M28.8,28.9c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S28.8,28.5,28.8,28.9z" />
                    <path className="LogoDNDAColorst591" d="M28.8,28.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S28.8,28.5,28.8,28.9z" />
                    <path className="LogoDNDAColorst592" d="M28.9,28.8c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C28.6,28.2,28.9,28.5,28.9,28.8z"/>
                    <path className="LogoDNDAColorst592" d="M29,28.8c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S29,28.4,29,28.8z" />
                    <path className="LogoDNDAColorst593" d="M29,28.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C28.8,28.1,29,28.4,29,28.8z"/>
                    <path className="LogoDNDAColorst594" d="M29.1,28.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S29.1,28.4,29.1,28.7z
								"/>
                    <path className="LogoDNDAColorst595" d="M29.2,28.7c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S29.2,28.4,29.2,28.7z" />
                    <path className="LogoDNDAColorst595" d="M29.3,28.7c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.6,0.7-0.6S29.3,28.3,29.3,28.7z" />
                    <path className="LogoDNDAColorst596" d="M29.3,28.7c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C29,28,29.3,28.3,29.3,28.7z"/>
                    <path className="LogoDNDAColorst597" d="M29.4,28.6c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S29.4,28.3,29.4,28.6z" />
                    <path className="LogoDNDAColorst598" d="M29.5,28.6c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6C29.2,27.9,29.5,28.2,29.5,28.6z"
                    />
                    <path className="LogoDNDAColorst598" d="M29.5,28.6c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S29.5,28.2,29.5,28.6z" />
                    <path className="LogoDNDAColorst599" d="M29.6,28.5c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C29.3,27.9,29.6,28.2,29.6,28.5z"/>
                    <path className="LogoDNDAColorst599" d="M29.7,28.5c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6C29.4,27.9,29.7,28.1,29.7,28.5z"
                    />
                    <path className="LogoDNDAColorst600" d="M29.7,28.5c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S29.7,28.1,29.7,28.5z
								"/>
                    <path className="LogoDNDAColorst600" d="M29.8,28.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S29.8,28.1,29.8,28.4z" />
                    <path className="LogoDNDAColorst601" d="M29.9,28.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S29.9,28,29.9,28.4z" />
                    <path className="LogoDNDAColorst601" d="M29.9,28.4c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S29.9,28,29.9,28.4z" />
                    <path className="LogoDNDAColorst602" d="M30,28.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6C29.7,27.7,30,28,30,28.3z" />
                    <path className="LogoDNDAColorst603" d="M30.1,28.3c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7
								C29.8,27.6,30.1,27.9,30.1,28.3z"/>
                    <path className="LogoDNDAColorst603" d="M30.1,28.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C29.8,27.6,30.1,27.9,30.1,28.3z"
                    />
                    <path className="LogoDNDAColorst604" d="M30.2,28.2c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S30.2,27.9,30.2,28.2z" />
                    <path className="LogoDNDAColorst605" d="M30.2,28.2c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S30.2,27.8,30.2,28.2z
								"/>
                    <path className="LogoDNDAColorst606" d="M30.3,28.2c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C30,27.5,30.3,27.8,30.3,28.2z"/>
                    <path className="LogoDNDAColorst607" d="M30.4,28.1c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7
								C30.1,27.5,30.4,27.8,30.4,28.1z"/>
                    <path className="LogoDNDAColorst608" d="M30.4,28.1c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C30.1,27.4,30.4,27.7,30.4,28.1z"/>
                    <path className="LogoDNDAColorst609" d="M30.5,28c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C30.2,27.4,30.5,27.7,30.5,28z
								"/>
                    <path className="LogoDNDAColorst610" d="M30.5,28c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.6,0.7-0.6
								C30.2,27.4,30.5,27.6,30.5,28z"/>
                    <path className="LogoDNDAColorst611" d="M30.6,28c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C30.3,27.3,30.6,27.6,30.6,28z
								"/>
                    <path className="LogoDNDAColorst612" d="M30.7,27.9c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7
								C30.4,27.3,30.7,27.6,30.7,27.9z"/>
                    <path className="LogoDNDAColorst613" d="M30.7,27.9c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S30.7,27.5,30.7,27.9z" />
                    <path className="LogoDNDAColorst614" d="M30.8,27.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C30.5,27.2,30.8,27.5,30.8,27.9z"/>
                    <path className="LogoDNDAColorst615" d="M30.8,27.8c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7C30.5,27.2,30.8,27.5,30.8,27.8z"
                    />
                    <path className="LogoDNDAColorst616" d="M30.9,27.8c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S30.9,27.4,30.9,27.8z" />
                    <path className="LogoDNDAColorst617" d="M30.9,27.7c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7C30.6,27.1,30.9,27.4,30.9,27.7z"
                    />
                    <path className="LogoDNDAColorst617" d="M31,27.7c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7S30,27,30.3,27S31,27.3,31,27.7z" />
                    <path className="LogoDNDAColorst618" d="M31,27.7c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7S30,27,30.4,27S31,27.3,31,27.7z" />
                    <path className="LogoDNDAColorst619" d="M31.1,27.6c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S31.1,27.3,31.1,27.6z" />
                    <path className="LogoDNDAColorst620" d="M31.2,27.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C30.9,26.9,31.2,27.2,31.2,27.6z"/>
                    <path className="LogoDNDAColorst621" d="M31.2,27.5c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S31.2,27.2,31.2,27.5z" />
                    <path className="LogoDNDAColorst620" d="M31.3,27.5c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S31.3,27.1,31.3,27.5z" />
                    <path className="LogoDNDAColorst622" d="M31.3,27.4c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C31,26.8,31.3,27.1,31.3,27.4z"/>
                    <path className="LogoDNDAColorst623" d="M31.4,27.4c0,0.4-0.3,0.7-0.7,0.7S30,27.8,30,27.4c0-0.4,0.3-0.7,0.7-0.7S31.4,27,31.4,27.4z" />
                    <path className="LogoDNDAColorst624" d="M31.4,27.4c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7
								C31.1,26.7,31.4,27,31.4,27.4z"/>
                    <path className="LogoDNDAColorst624" d="M31.5,27.3c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7
								C31.2,26.7,31.5,27,31.5,27.3z"/>
                    <path className="LogoDNDAColorst625" d="M31.5,27.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C31.2,26.6,31.5,26.9,31.5,27.3z"/>
                    <path className="LogoDNDAColorst626" d="M31.6,27.2c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C31.3,26.6,31.6,26.9,31.6,27.2z"/>
                    <path className="LogoDNDAColorst627" d="M31.6,27.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S31.6,26.8,31.6,27.2z" />
                    <path className="LogoDNDAColorst628" d="M31.7,27.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C31.4,26.5,31.7,26.8,31.7,27.1z"/>
                    <path className="LogoDNDAColorst628" d="M31.7,27.1c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.6,0.7-0.6S31.7,26.7,31.7,27.1z" />
                    <path className="LogoDNDAColorst629" d="M31.8,27.1c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S31.8,26.7,31.8,27.1z" />
                    <path className="LogoDNDAColorst630" d="M31.8,27c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7C31.5,26.4,31.8,26.6,31.8,27z
								"/>
                    <path className="LogoDNDAColorst631" d="M31.8,27c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.6,0.7-0.6S31.8,26.6,31.8,27z" />
                    <path className="LogoDNDAColorst632" d="M31.9,26.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C31.6,26.3,31.9,26.6,31.9,26.9z"/>
                    <path className="LogoDNDAColorst633" d="M31.9,26.9c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S31.9,26.5,31.9,26.9z
								"/>
                    <path className="LogoDNDAColorst633" d="M32,26.8c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C31.7,26.2,32,26.5,32,26.8z"/>
                    <path className="LogoDNDAColorst634" d="M32,26.8c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S32,26.4,32,26.8z" />
                    <path className="LogoDNDAColorst635" d="M32.1,26.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C31.8,26.1,32.1,26.4,32.1,26.7z"/>
                    <path className="LogoDNDAColorst635" d="M32.1,26.7c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C31.8,26,32.1,26.3,32.1,26.7z"/>
                    <path className="LogoDNDAColorst636" d="M32.2,26.6c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S32.2,26.3,32.2,26.6z" />
                    <path className="LogoDNDAColorst637" d="M32.2,26.6c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S32.2,26.2,32.2,26.6z" />
                    <path className="LogoDNDAColorst638" d="M32.2,26.5c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S32.2,26.2,32.2,26.5z
								"/>
                    <path className="LogoDNDAColorst639" d="M32.3,26.5c0,0.4-0.3,0.7-0.7,0.7S31,26.9,31,26.5s0.3-0.6,0.7-0.6S32.3,26.1,32.3,26.5z" />
                    <path className="LogoDNDAColorst640" d="M32.3,26.5c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S32.3,26.1,32.3,26.5z
								"/>
                    <path className="LogoDNDAColorst641" d="M32.4,26.4c0,0.4-0.3,0.7-0.7,0.7S31,26.8,31,26.4c0-0.4,0.3-0.6,0.7-0.6S32.4,26,32.4,26.4z" />
                    <path className="LogoDNDAColorst642" d="M32.4,26.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S32.4,26,32.4,26.4z" />
                    <path className="LogoDNDAColorst642" d="M32.4,26.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C32.1,25.7,32.4,26,32.4,26.3z"/>
                    <path className="LogoDNDAColorst643" d="M32.5,26.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C32.2,25.6,32.5,25.9,32.5,26.3z"
                    />
                    <path className="LogoDNDAColorst643" d="M32.5,26.2c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S32.5,25.9,32.5,26.2z
								"/>
                    <path className="LogoDNDAColorst644" d="M32.6,26.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S32.6,25.8,32.6,26.2z" />
                    <path className="LogoDNDAColorst645" d="M32.6,26.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C32.3,25.5,32.6,25.8,32.6,26.1z"/>
                    <path className="LogoDNDAColorst646" d="M32.6,26.1c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6C32.3,25.4,32.6,25.7,32.6,26.1z"
                    />
                    <path className="LogoDNDAColorst647" d="M32.7,26c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C32.4,25.4,32.7,25.7,32.7,26z"/>
                    <path className="LogoDNDAColorst648" d="M32.7,26c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C32.4,25.3,32.7,25.6,32.7,26z"/>
                    <path className="LogoDNDAColorst649" d="M32.7,25.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C32.4,25.3,32.7,25.6,32.7,25.9z"/>
                    <path className="LogoDNDAColorst650" d="M32.8,25.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S32.8,25.5,32.8,25.9z
								"/>
                    <path className="LogoDNDAColorst651" d="M32.8,25.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C32.5,25.2,32.8,25.5,32.8,25.8z"/>
                    <path className="LogoDNDAColorst652" d="M32.8,25.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C32.5,25.1,32.8,25.4,32.8,25.8z"/>
                    <path className="LogoDNDAColorst653" d="M32.9,25.7c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C32.6,25.1,32.9,25.4,32.9,25.7z"/>
                    <path className="LogoDNDAColorst653" d="M32.9,25.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C32.6,25,32.9,25.3,32.9,25.7z"/>
                    <path className="LogoDNDAColorst654" d="M32.9,25.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C32.7,25,32.9,25.3,32.9,25.6z"/>
                    <path className="LogoDNDAColorst655" d="M33,25.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6C32.7,24.9,33,25.2,33,25.6z"
                    />
                    <path className="LogoDNDAColorst655" d="M33,25.5c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C32.7,24.9,33,25.2,33,25.5z"
                    />
                    <path className="LogoDNDAColorst656" d="M33,25.5c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C32.7,24.8,33,25.1,33,25.5z"
                    />
                    <path className="LogoDNDAColorst657" d="M33.1,25.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S33.1,25.1,33.1,25.4z" />
                    <path className="LogoDNDAColorst658" d="M33.1,25.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S33.1,25,33.1,25.4z" />
                    <path className="LogoDNDAColorst658" d="M33.1,25.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S33.1,25,33.1,25.3z" />
                    <path className="LogoDNDAColorst659" d="M33.2,25.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S33.2,24.9,33.2,25.3z" />
                    <path className="LogoDNDAColorst659" d="M33.2,25.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C32.9,24.6,33.2,24.9,33.2,25.3z"/>
                    <path className="LogoDNDAColorst660" d="M33.2,25.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6C32.9,24.6,33.2,24.8,33.2,25.2z"
                    />
                    <path className="LogoDNDAColorst661" d="M33.3,25.2c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C33,24.5,33.3,24.8,33.3,25.2z"/>
                    <path className="LogoDNDAColorst661" d="M33.3,25.1c0,0.4-0.3,0.7-0.7,0.7S32,25.5,32,25.1s0.3-0.6,0.7-0.6S33.3,24.8,33.3,25.1z" />
                    <path className="LogoDNDAColorst662" d="M33.3,25.1c0,0.4-0.3,0.6-0.7,0.6S32,25.4,32,25.1s0.3-0.7,0.7-0.7C33,24.4,33.3,24.7,33.3,25.1z" />
                    <path className="LogoDNDAColorst663" d="M33.3,25c0,0.4-0.3,0.7-0.7,0.7S32,25.4,32,25s0.3-0.7,0.7-0.7S33.3,24.7,33.3,25z" />
                    <path className="LogoDNDAColorst664" d="M33.4,25c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S33.4,24.6,33.4,25z" />
                    <path className="LogoDNDAColorst665" d="M33.4,24.9c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7
								C33.1,24.3,33.4,24.6,33.4,24.9z"/>
                    <path className="LogoDNDAColorst666" d="M33.4,24.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C33.1,24.2,33.4,24.5,33.4,24.9z"/>
                    <path className="LogoDNDAColorst666" d="M33.5,24.8c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C33.2,24.2,33.5,24.5,33.5,24.8z"/>
                    <path className="LogoDNDAColorst667" d="M33.5,24.8c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C33.2,24.1,33.5,24.4,33.5,24.8z"/>
                    <path className="LogoDNDAColorst668" d="M33.5,24.7c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S33.5,24.4,33.5,24.7z" />
                    <path className="LogoDNDAColorst669" d="M33.5,24.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C33.2,24,33.5,24.3,33.5,24.7z"/>
                    <path className="LogoDNDAColorst670" d="M33.6,24.6c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C33.3,24,33.6,24.3,33.6,24.6z"/>
                    <path className="LogoDNDAColorst670" d="M33.6,24.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S33.6,24.2,33.6,24.6z
								"/>
                    <path className="LogoDNDAColorst670" d="M33.6,24.5c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7
								C33.3,23.9,33.6,24.2,33.6,24.5z"/>
                    <path className="LogoDNDAColorst671" d="M33.6,24.5c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C33.3,23.8,33.6,24.1,33.6,24.5z"/>
                    <path className="LogoDNDAColorst672" d="M33.7,24.4c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7C33.4,23.8,33.7,24.1,33.7,24.4z"
                    />
                    <path className="LogoDNDAColorst673" d="M33.7,24.4c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S33.7,24,33.7,24.4z"
                    />
                    <path className="LogoDNDAColorst674" d="M33.7,24.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S33.7,24,33.7,24.4z" />
                    <path className="LogoDNDAColorst674" d="M33.7,24.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6C33.4,23.7,33.7,23.9,33.7,24.3z"
                    />
                    <path className="LogoDNDAColorst675" d="M33.7,24.3c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.6,0.7-0.6S33.7,23.9,33.7,24.3z" />
                    <path className="LogoDNDAColorst676" d="M33.8,24.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C33.5,23.6,33.8,23.9,33.8,24.2z"/>
                    <path className="LogoDNDAColorst677" d="M33.8,24.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S33.8,23.8,33.8,24.2z" />
                    <path className="LogoDNDAColorst678" d="M33.8,24.1c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S33.8,23.8,33.8,24.1z" />
                    <path className="LogoDNDAColorst679" d="M33.8,24.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C33.5,23.4,33.8,23.7,33.8,24.1z"/>
                    <path className="LogoDNDAColorst680" d="M33.8,24c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S33.8,23.7,33.8,24z" />
                    <path className="LogoDNDAColorst681" d="M33.9,24c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C33.6,23.3,33.9,23.6,33.9,24z"/>
                    <path className="LogoDNDAColorst682" d="M33.9,23.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S33.9,23.6,33.9,23.9z" />
                    <path className="LogoDNDAColorst683" d="M33.9,23.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C33.6,23.3,33.9,23.5,33.9,23.9z"/>
                    <path className="LogoDNDAColorst684" d="M33.9,23.9c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.6,0.7-0.6C33.6,23.2,33.9,23.5,33.9,23.9z"
                    />
                    <path className="LogoDNDAColorst685" d="M33.9,23.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C33.7,23.2,33.9,23.5,33.9,23.8z"/>
                    <path className="LogoDNDAColorst686" d="M34,23.8c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S34,23.4,34,23.8z" />
                    <path className="LogoDNDAColorst686" d="M34,23.7c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7C33.7,23.1,34,23.4,34,23.7z" />
                    <path className="LogoDNDAColorst687" d="M34,23.7c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S34,23.3,34,23.7z" />
                    <path className="LogoDNDAColorst687" d="M34,23.6c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6S33,23,33.4,23S34,23.3,34,23.6z" />
                    <path className="LogoDNDAColorst688" d="M34,23.6c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S34,23.2,34,23.6z" />
                    <path className="LogoDNDAColorst689" d="M34.1,23.6c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S34.1,23.2,34.1,23.6z" />
                    <path className="LogoDNDAColorst690" d="M34.1,23.5c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S34.1,23.2,34.1,23.5z" />
                    <path className="LogoDNDAColorst691" d="M34.1,23.5c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S34.1,23.1,34.1,23.5z" />
                    <path className="LogoDNDAColorst692" d="M34.1,23.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C33.8,22.8,34.1,23.1,34.1,23.4z"/>
                    <path className="LogoDNDAColorst693" d="M34.1,23.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S34.1,23,34.1,23.4z" />
                    <path className="LogoDNDAColorst694" d="M34.1,23.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S34.1,23,34.1,23.3z" />
                    <path className="LogoDNDAColorst694" d="M34.1,23.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C33.9,22.7,34.1,22.9,34.1,23.3z"/>
                    <path className="LogoDNDAColorst695" d="M34.2,23.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C33.9,22.6,34.2,22.9,34.2,23.3z"/>
                    <path className="LogoDNDAColorst695" d="M34.2,23.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S34.2,22.9,34.2,23.2z" />
                    <path className="LogoDNDAColorst696" d="M34.2,23.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C33.9,22.5,34.2,22.8,34.2,23.2z"
                    />
                    <path className="LogoDNDAColorst697" d="M34.2,23.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S34.2,22.8,34.2,23.1z" />
                    <path className="LogoDNDAColorst697" d="M34.2,23.1c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S34.2,22.7,34.2,23.1z" />
                    <path className="LogoDNDAColorst698" d="M34.2,23.1c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S34.2,22.7,34.2,23.1z" />
                    <path className="LogoDNDAColorst699" d="M34.2,23c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C33.9,22.4,34.2,22.7,34.2,23z
								"/>
                    <path className="LogoDNDAColorst700" d="M34.2,23c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S34.2,22.6,34.2,23z" />
                    <path className="LogoDNDAColorst701" d="M34.3,23c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6C34,22.3,34.3,22.6,34.3,23z"
                    />
                    <path className="LogoDNDAColorst702" d="M34.3,22.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C34,22.3,34.3,22.6,34.3,22.9z"/>
                    <path className="LogoDNDAColorst703" d="M34.3,22.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C34,22.2,34.3,22.5,34.3,22.9z"/>
                    <path className="LogoDNDAColorst704" d="M34.3,22.9c0,0.4-0.3,0.6-0.7,0.6S33,23.2,33,22.9c0-0.4,0.3-0.7,0.7-0.7S34.3,22.5,34.3,22.9z" />
                    <path className="LogoDNDAColorst705" d="M34.3,22.8c0,0.4-0.3,0.7-0.7,0.7S33,23.2,33,22.8s0.3-0.6,0.7-0.6S34.3,22.5,34.3,22.8z" />
                    <path className="LogoDNDAColorst706" d="M34.3,22.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S34.3,22.4,34.3,22.8z
								"/>
                    <path className="LogoDNDAColorst707" d="M34.3,22.7c0,0.4-0.3,0.7-0.7,0.7S33,23.1,33,22.7c0-0.4,0.3-0.7,0.7-0.7C34,22.1,34.3,22.4,34.3,22.7
								z"/>
                    <path className="LogoDNDAColorst707" d="M34.3,22.7c0,0.4-0.3,0.7-0.7,0.7S33,23.1,33,22.7c0-0.4,0.3-0.7,0.7-0.7C34,22.1,34.3,22.4,34.3,22.7
								z"/>
                    <path className="LogoDNDAColorst708" d="M34.3,22.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C34,22,34.3,22.3,34.3,22.7z"/>
                    <path className="LogoDNDAColorst709" d="M34.4,22.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C34.1,22,34.4,22.3,34.4,22.6z"/>
                    <path className="LogoDNDAColorst709" d="M34.4,22.6c0,0.4-0.3,0.7-0.7,0.7S33,23,33,22.6c0-0.4,0.3-0.6,0.7-0.6S34.4,22.3,34.4,22.6z" />
                    <path className="LogoDNDAColorst710" d="M34.4,22.6c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S34.4,22.2,34.4,22.6z
								"/>
                    <path className="LogoDNDAColorst710" d="M34.4,22.5c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C34.1,21.9,34.4,22.2,34.4,22.5z"/>
                    <path className="LogoDNDAColorst711" d="M34.4,22.5c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.6,0.7-0.6S34.4,22.2,34.4,22.5z
								"/>
                    <path className="LogoDNDAColorst712" d="M34.4,22.5c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S34.4,22.1,34.4,22.5z" />
                    <path className="LogoDNDAColorst712" d="M34.4,22.5c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C34.1,21.8,34.4,22.1,34.4,22.5z"/>
                    <path className="LogoDNDAColorst713" d="M34.4,22.4c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S34.4,22.1,34.4,22.4z
								"/>
                    <path className="LogoDNDAColorst714" d="M34.4,22.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C34.1,21.7,34.4,22,34.4,22.4z"/>
                    <path className="LogoDNDAColorst715" d="M34.4,22.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S34.4,22,34.4,22.4z" />
                    <path className="LogoDNDAColorst716" d="M34.4,22.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C34.1,21.7,34.4,22,34.4,22.3z" />
                    <path className="LogoDNDAColorst717" d="M34.4,22.3c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.6,0.7-0.6S34.4,22,34.4,22.3z" />
                    <path className="LogoDNDAColorst718" d="M34.4,22.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C34.2,21.6,34.4,21.9,34.4,22.3z"/>
                    <path className="LogoDNDAColorst718" d="M34.4,22.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S34.4,21.9,34.4,22.3z" />
                    <path className="LogoDNDAColorst719" d="M34.5,22.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S34.5,21.9,34.5,22.2z" />
                    <path className="LogoDNDAColorst720" d="M34.5,22.2c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C34.2,21.6,34.5,21.8,34.5,22.2z"/>
                    <path className="LogoDNDAColorst721" d="M34.5,22.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S34.5,21.8,34.5,22.2z" />
                    <path className="LogoDNDAColorst722" d="M34.5,22.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S34.5,21.8,34.5,22.2z" />
                    <path className="LogoDNDAColorst722" d="M34.5,22.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C34.2,21.5,34.5,21.8,34.5,22.1z"/>
                    <path className="LogoDNDAColorst723" d="M34.5,22.1c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S34.5,21.7,34.5,22.1z" />
                    <path className="LogoDNDAColorst724" d="M34.5,22.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C34.2,21.4,34.5,21.7,34.5,22.1z"/>
                    <path className="LogoDNDAColorst725" d="M34.5,22.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S34.5,21.7,34.5,22.1z
								"/>
                    <path className="LogoDNDAColorst726" d="M34.5,22c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S34.5,21.7,34.5,22z" />
                    <path className="LogoDNDAColorst726" d="M34.5,22c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.6,0.7-0.6S34.5,21.6,34.5,22z" />
                    <path className="LogoDNDAColorst727" d="M34.5,22c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S34.5,21.6,34.5,22z" />
                    <path className="LogoDNDAColorst728" d="M34.5,22c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S34.5,21.6,34.5,22z" />
                    <path className="LogoDNDAColorst729" d="M34.5,22c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S34.5,21.6,34.5,22z" />
                    <path className="LogoDNDAColorst729" d="M34.5,21.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S34.5,21.6,34.5,21.9z" />
                    <path className="LogoDNDAColorst730" d="M34.5,21.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S34.5,21.6,34.5,21.9z" />
                    <path className="LogoDNDAColorst731" d="M34.5,21.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C34.2,21.2,34.5,21.5,34.5,21.9z"/>
                    <path className="LogoDNDAColorst732" d="M34.5,21.9c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.6,0.7-0.6S34.5,21.5,34.5,21.9z" />
                    <path className="LogoDNDAColorst733" d="M34.5,21.8c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C34.2,21.1,34.5,21.4,34.5,21.8z"/>
                    <path className="LogoDNDAColorst734" d="M34.5,21.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C34.2,21,34.5,21.3,34.5,21.7z"/>
                    <path className="LogoDNDAColorst734" d="M34.5,21.6c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C34.2,20.9,34.5,21.2,34.5,21.6z"/>
                    <path className="LogoDNDAColorst735" d="M34.5,21.5c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S34.5,21.1,34.5,21.5z" />
                    <path className="LogoDNDAColorst736" d="M34.6,21.4c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C34.3,20.8,34.6,21,34.6,21.4z"/>
                    <path className="LogoDNDAColorst737" d="M34.6,21.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C34.3,20.7,34.6,21,34.6,21.3z" />
                    <path className="LogoDNDAColorst737" d="M34.6,21.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S34.6,20.9,34.6,21.2z" />
                    <path className="LogoDNDAColorst738" d="M34.6,21.1c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S34.6,20.8,34.6,21.1z" />
                    <path className="LogoDNDAColorst739" d="M34.6,21c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6C34.3,20.4,34.6,20.7,34.6,21z
								"/>
                    <path className="LogoDNDAColorst740" d="M34.6,20.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C34.3,20.3,34.6,20.6,34.6,20.9z"/>
                    <path className="LogoDNDAColorst740" d="M34.6,20.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C34.3,20.2,34.6,20.5,34.6,20.8z"/>
                    <path className="LogoDNDAColorst741" d="M34.6,20.7c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7
								C34.3,20.1,34.6,20.4,34.6,20.7z"/>
                    <path className="LogoDNDAColorst742" d="M34.6,20.6c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S34.6,20.3,34.6,20.6z" />
                    <path className="LogoDNDAColorst743" d="M34.6,20.5c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.6,0.7-0.6S34.6,20.2,34.6,20.5z" />
                    <path className="LogoDNDAColorst744" d="M34.6,20.4c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S34.6,20.1,34.6,20.4z" />
                    <path className="LogoDNDAColorst745" d="M34.6,20.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C34.3,19.7,34.6,20,34.6,20.3z"/>
                    <path className="LogoDNDAColorst746" d="M34.6,20.2c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C34.3,19.6,34.6,19.9,34.6,20.2z"/>
                    <path className="LogoDNDAColorst747" d="M34.6,20.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C34.3,19.5,34.6,19.8,34.6,20.1z"/>
                    <path className="LogoDNDAColorst747" d="M34.6,20c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S34.6,19.7,34.6,20z" />
                    <path className="LogoDNDAColorst748" d="M34.6,19.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S34.6,19.6,34.6,19.9z" />
                    <path className="LogoDNDAColorst749" d="M34.6,19.8c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S34.6,19.5,34.6,19.8z" />
                    <path className="LogoDNDAColorst750" d="M34.6,19.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C34.3,19.1,34.6,19.3,34.6,19.7z"/>
                    <path className="LogoDNDAColorst751" d="M34.6,19.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C34.3,19,34.6,19.2,34.6,19.6z"/>
                    <path className="LogoDNDAColorst752" d="M34.6,19.5c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S34.6,19.1,34.6,19.5z" />
                    <path className="LogoDNDAColorst753" d="M34.6,19.4c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C34.3,18.7,34.6,19,34.6,19.4z"/>
                    <path className="LogoDNDAColorst754" d="M34.6,19.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S34.6,18.9,34.6,19.3z" />
                    <path className="LogoDNDAColorst754" d="M34.6,19.2c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S34.6,18.8,34.6,19.2z" />
                    <path className="LogoDNDAColorst755" d="M34.6,19.1c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.6,0.7-0.6S34.6,18.7,34.6,19.1z" />
                    <path className="LogoDNDAColorst756" d="M34.6,19c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S34.6,18.6,34.6,19z" />
                    <path className="LogoDNDAColorst757" d="M34.5,18.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C34.2,18.2,34.5,18.5,34.5,18.9z"/>
                    <path className="LogoDNDAColorst758" d="M34.5,18.8c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C34.2,18.1,34.5,18.4,34.5,18.8z"/>
                    <path className="LogoDNDAColorst759" d="M34.5,18.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C34.2,18,34.5,18.3,34.5,18.7z"/>
                    <path className="LogoDNDAColorst760" d="M34.5,18.6c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S34.5,18.2,34.5,18.6z" />
                    <path className="LogoDNDAColorst760" d="M34.5,18.4c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C34.2,17.8,34.5,18.1,34.5,18.4z"/>
                    <path className="LogoDNDAColorst761" d="M34.5,18.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S34.5,18,34.5,18.3z" />
                    <path className="LogoDNDAColorst762" d="M34.5,18.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C34.2,17.6,34.5,17.9,34.5,18.2z"/>
                    <path className="LogoDNDAColorst763" d="M34.5,18.1c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C34.2,17.5,34.5,17.8,34.5,18.1z"/>
                    <path className="LogoDNDAColorst763" d="M34.4,18c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7C34.2,17.4,34.4,17.7,34.4,18z
								"/>
                    <path className="LogoDNDAColorst764" d="M34.4,17.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S34.4,17.6,34.4,17.9z" />
                    <path className="LogoDNDAColorst765" d="M34.4,17.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S34.4,17.5,34.4,17.8z
								"/>
                    <path className="LogoDNDAColorst766" d="M34.4,17.7c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C34.1,17,34.4,17.3,34.4,17.7z"/>
                    <path className="LogoDNDAColorst766" d="M34.4,17.6c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S34.4,17.2,34.4,17.6z" />
                    <path className="LogoDNDAColorst767" d="M34.4,17.5c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C34.1,16.8,34.4,17.1,34.4,17.5z"/>
                    <path className="LogoDNDAColorst768" d="M34.3,17.4c0,0.4-0.3,0.7-0.7,0.7S33,17.7,33,17.4s0.3-0.7,0.7-0.7C34,16.7,34.3,17,34.3,17.4z" />
                    <path className="LogoDNDAColorst769" d="M34.3,17.3c0,0.4-0.3,0.7-0.7,0.7S33,17.6,33,17.3s0.3-0.7,0.7-0.7S34.3,16.9,34.3,17.3z" />
                    <path className="LogoDNDAColorst769" d="M34.3,17.2c0,0.4-0.3,0.7-0.7,0.7S33,17.5,33,17.2c0-0.4,0.3-0.6,0.7-0.6S34.3,16.8,34.3,17.2z" />
                    <path className="LogoDNDAColorst770" d="M34.3,17.1c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C34,16.4,34.3,16.7,34.3,17.1z"/>
                    <path className="LogoDNDAColorst771" d="M34.2,17c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S34.2,16.6,34.2,17z" />
                    <path className="LogoDNDAColorst772" d="M34.2,16.8c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S34.2,16.5,34.2,16.8z" />
                    <path className="LogoDNDAColorst772" d="M34.2,16.7c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S34.2,16.4,34.2,16.7z" />
                    <path className="LogoDNDAColorst773" d="M34.2,16.6c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S34.2,16.3,34.2,16.6z" />
                    <path className="LogoDNDAColorst774" d="M34.1,16.5c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S34.1,16.2,34.1,16.5z" />
                    <path className="LogoDNDAColorst775" d="M34.1,16.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S34.1,16.1,34.1,16.4z" />
                    <path className="LogoDNDAColorst775" d="M34.1,16.3c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S34.1,15.9,34.1,16.3z" />
                    <path className="LogoDNDAColorst776" d="M34.1,16.2c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C33.8,15.5,34.1,15.8,34.1,16.2z"/>
                    <path className="LogoDNDAColorst777" d="M34,16.1c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S34,15.7,34,16.1z" />
                    <path className="LogoDNDAColorst778" d="M34,16c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S34,15.6,34,16z" />
                    <path className="LogoDNDAColorst779" d="M34,15.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6C33.7,15.2,34,15.5,34,15.9z" />
                    <path className="LogoDNDAColorst780" d="M33.9,15.8c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S33.9,15.4,33.9,15.8z" />
                    <path className="LogoDNDAColorst780" d="M33.9,15.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C33.6,15,33.9,15.3,33.9,15.7z"/>
                    <path className="LogoDNDAColorst781" d="M33.8,15.6c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C33.6,14.9,33.8,15.2,33.8,15.6z"/>
                    <path className="LogoDNDAColorst782" d="M33.8,15.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C33.5,14.8,33.8,15.1,33.8,15.4z"/>
                    <path className="LogoDNDAColorst783" d="M33.8,15.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S33.8,15,33.8,15.3z" />
                    <path className="LogoDNDAColorst783" d="M33.7,15.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S33.7,14.9,33.7,15.2z" />
                    <path className="LogoDNDAColorst784" d="M33.7,15.1c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S33.7,14.8,33.7,15.1z
								"/>
                    <path className="LogoDNDAColorst785" d="M33.7,15c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S33.7,14.7,33.7,15z" />
                    <path className="LogoDNDAColorst786" d="M33.6,14.9c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C33.3,14.3,33.6,14.6,33.6,14.9z"/>
                    <path className="LogoDNDAColorst787" d="M33.6,14.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C33.3,14.2,33.6,14.5,33.6,14.8z"/>
                    <path className="LogoDNDAColorst788" d="M33.5,14.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C33.2,14.1,33.5,14.3,33.5,14.7z"/>
                    <path className="LogoDNDAColorst788" d="M33.5,14.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C33.2,13.9,33.5,14.2,33.5,14.6z"/>
                    <path className="LogoDNDAColorst789" d="M33.4,14.5c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S33.4,14.1,33.4,14.5z" />
                    <path className="LogoDNDAColorst790" d="M33.4,14.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C33.1,13.7,33.4,14,33.4,14.4z"/>
                    <path className="LogoDNDAColorst790" d="M33.3,14.3c0,0.4-0.3,0.7-0.7,0.7S32,14.6,32,14.3c0-0.4,0.3-0.7,0.7-0.7S33.3,13.9,33.3,14.3z" />
                    <path className="LogoDNDAColorst791" d="M33.3,14.2c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C33,13.5,33.3,13.8,33.3,14.2z"/>
                    <path className="LogoDNDAColorst792" d="M33.2,14.1c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C32.9,13.4,33.2,13.7,33.2,14.1z"/>
                    <path className="LogoDNDAColorst793" d="M33.2,14c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S33.2,13.6,33.2,14z" />
                    <path className="LogoDNDAColorst794" d="M33.1,13.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S33.1,13.5,33.1,13.9z" />
                    <path className="LogoDNDAColorst795" d="M33.1,13.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C32.8,13.1,33.1,13.4,33.1,13.8z"/>
                    <path className="LogoDNDAColorst796" d="M33,13.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S33,13.3,33,13.7z" />
                    <path className="LogoDNDAColorst796" d="M33,13.6c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S33,13.2,33,13.6z" />
                    <path className="LogoDNDAColorst797" d="M32.9,13.5c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C32.6,12.8,32.9,13.1,32.9,13.5z"/>
                    <path className="LogoDNDAColorst798" d="M32.8,13.4c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C32.5,12.7,32.8,13,32.8,13.4z"/>
                    <path className="LogoDNDAColorst799" d="M32.8,13.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S32.8,12.9,32.8,13.3z" />
                    <path className="LogoDNDAColorst800" d="M32.7,13.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C32.4,12.5,32.7,12.8,32.7,13.2z"/>
                    <path className="LogoDNDAColorst801" d="M32.7,13.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C32.4,12.4,32.7,12.7,32.7,13.1z"/>
                    <path className="LogoDNDAColorst801" d="M32.6,13c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C32.3,12.3,32.6,12.6,32.6,13z
								"/>
                    <path className="LogoDNDAColorst802" d="M32.5,12.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S32.5,12.5,32.5,12.9z
								"/>
                    <path className="LogoDNDAColorst803" d="M32.5,12.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S32.5,12.4,32.5,12.8z
								"/>
                    <path className="LogoDNDAColorst803" d="M32.4,12.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S32.4,12.3,32.4,12.7z
								"/>
                    <path className="LogoDNDAColorst804" d="M32.3,12.6c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S32.3,12.2,32.3,12.6z
								"/>
                    <path className="LogoDNDAColorst805" d="M32.3,12.5c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S32.3,12.1,32.3,12.5z" />
                    <path className="LogoDNDAColorst805" d="M32.2,12.4c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C31.9,11.7,32.2,12,32.2,12.4z"/>
                    <path className="LogoDNDAColorst806" d="M32.1,12.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S32.1,11.9,32.1,12.3z" />
                    <path className="LogoDNDAColorst807" d="M32,12.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S32,11.8,32,12.2z" />
                    <path className="LogoDNDAColorst807" d="M32,12.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C31.7,11.4,32,11.7,32,12.1z"/>
                    <path className="LogoDNDAColorst808" d="M31.9,12c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C31.6,11.3,31.9,11.6,31.9,12z"/>
                    <path className="LogoDNDAColorst809" d="M31.8,11.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S31.8,11.5,31.8,11.9z" />
                    <path className="LogoDNDAColorst810" d="M31.7,11.8c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S31.7,11.4,31.7,11.8z" />
                    <path className="LogoDNDAColorst811" d="M31.7,11.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C31.4,11,31.7,11.3,31.7,11.7z"/>
                    <path className="LogoDNDAColorst812" d="M31.6,11.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C31.3,10.9,31.6,11.2,31.6,11.6z"/>
                    <path className="LogoDNDAColorst812" d="M31.5,11.5c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6
								C31.2,10.9,31.5,11.2,31.5,11.5z"/>
                    <path className="LogoDNDAColorst813" d="M31.4,11.4c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C31.1,10.8,31.4,11.1,31.4,11.4z"/>
                    <path className="LogoDNDAColorst814" d="M31.3,11.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C31,10.7,31.3,11,31.3,11.3z"/>
                    <path className="LogoDNDAColorst814" d="M31.2,11.2c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.6,0.7-0.6S31.2,10.9,31.2,11.2z" />
                    <path className="LogoDNDAColorst815" d="M31.1,11.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C30.9,10.5,31.1,10.8,31.1,11.1z"/>
                    <path className="LogoDNDAColorst816" d="M31.1,11.1c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S31.1,10.7,31.1,11.1z" />
                    <path className="LogoDNDAColorst816" d="M31,11c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7C30.7,10.3,31,10.6,31,11z
								"/>
                    <path className="LogoDNDAColorst817" d="M30.9,10.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S30.9,10.5,30.9,10.9z" />
                    <path className="LogoDNDAColorst818" d="M30.8,10.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7
								C30.5,10.1,30.8,10.4,30.8,10.8z"/>
                    <path className="LogoDNDAColorst818" d="M30.7,10.7c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S30.7,10.4,30.7,10.7z" />
                    <path className="LogoDNDAColorst819" d="M30.6,10.6c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C30.3,10,30.6,10.3,30.6,10.6z"/>
                    <path className="LogoDNDAColorst820" d="M30.5,10.5c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C30.2,9.9,30.5,10.2,30.5,10.5z"/>
                    <path className="LogoDNDAColorst820" d="M30.4,10.5c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S30.4,10.1,30.4,10.5z" />
                    <path className="LogoDNDAColorst821" d="M30.3,10.4c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S30.3,10,30.3,10.4z"
                    />
                    <path className="LogoDNDAColorst822" d="M30.2,10.3c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S30.2,9.9,30.2,10.3z"
                    />
                    <path className="LogoDNDAColorst823" d="M30.1,10.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S30.1,9.8,30.1,10.2z" />
                    <path className="LogoDNDAColorst824" d="M30,10.1c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S30,9.8,30,10.1z" />
                    <path className="LogoDNDAColorst825" d="M29.9,10c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S29.9,9.7,29.9,10z" />
                    <path className="LogoDNDAColorst825" d="M29.8,10c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S29.8,9.6,29.8,10z" />
                    <path className="LogoDNDAColorst826" d="M29.7,9.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6C29.4,9.2,29.7,9.5,29.7,9.9z
								"/>
                    <path className="LogoDNDAColorst827" d="M29.6,9.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C29.3,9.1,29.6,9.4,29.6,9.8z
								"/>
                    <path className="LogoDNDAColorst827" d="M29.5,9.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C29.2,9.1,29.5,9.4,29.5,9.7z"/>
                    <path className="LogoDNDAColorst828" d="M29.3,9.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7S28.3,9,28.7,9C29.1,9,29.3,9.3,29.3,9.7z" />
                    <path className="LogoDNDAColorst829" d="M29.2,9.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6C28.9,8.9,29.2,9.2,29.2,9.6z
								"/>
                    <path className="LogoDNDAColorst829" d="M29.1,9.5c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S29.1,9.1,29.1,9.5z" />
                    <path className="LogoDNDAColorst830" d="M29,9.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S29,9.1,29,9.4z" />
                    <path className="LogoDNDAColorst830" d="M28.9,9.4c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S28.9,9,28.9,9.4z" />
                    <path className="LogoDNDAColorst831" d="M28.8,9.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6C28.5,8.6,28.8,8.9,28.8,9.3z
								"/>
                    <path className="LogoDNDAColorst832" d="M28.6,9.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6C28.3,8.6,28.6,8.8,28.6,9.2z
								"/>
                    <path className="LogoDNDAColorst832" d="M28.5,9.1c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C28.2,8.5,28.5,8.8,28.5,9.1z"/>
                    <path className="LogoDNDAColorst833" d="M28.4,9.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C28.1,8.4,28.4,8.7,28.4,9.1z"/>
                    <path className="LogoDNDAColorst833" d="M28.3,9c0,0.4-0.3,0.7-0.7,0.7S26.9,9.4,26.9,9c0-0.4,0.3-0.6,0.7-0.6S28.3,8.6,28.3,9z" />
                    <path className="LogoDNDAColorst834" d="M28.1,8.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C27.8,8.3,28.1,8.6,28.1,8.9z"/>
                    <path className="LogoDNDAColorst835" d="M28,8.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S28,8.5,28,8.9z" />
                    <path className="LogoDNDAColorst836" d="M27.9,8.8c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S27.9,8.4,27.9,8.8z" />
                    <path className="LogoDNDAColorst837" d="M27.7,8.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C27.4,8.1,27.7,8.4,27.7,8.7z
								"/>
                    <path className="LogoDNDAColorst837" d="M27.6,8.7c0,0.4-0.3,0.7-0.7,0.7S26.3,9,26.3,8.7c0-0.4,0.3-0.6,0.7-0.6C27.3,8,27.6,8.3,27.6,8.7z" />
                    <path className="LogoDNDAColorst838" d="M27.5,8.6c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S27.5,8.2,27.5,8.6z" />
                    <path className="LogoDNDAColorst839" d="M27.3,8.5c0,0.4-0.3,0.7-0.7,0.7S26,8.9,26,8.5s0.3-0.7,0.7-0.7C27,7.9,27.3,8.2,27.3,8.5z" />
                    <path className="LogoDNDAColorst840" d="M27.2,8.5c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C26.9,7.8,27.2,8.1,27.2,8.5z"/>
                    <path className="LogoDNDAColorst841" d="M27.1,8.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S27.1,8.1,27.1,8.4z" />
                    <path className="LogoDNDAColorst842" d="M26.9,8.4c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6
								C26.6,7.7,26.9,8,26.9,8.4z"/>
                    <path className="LogoDNDAColorst843" d="M26.8,8.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S26.8,7.9,26.8,8.3z" />
                    <path className="LogoDNDAColorst844" d="M26.6,8.3c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7C26.3,7.6,26.6,7.9,26.6,8.3z
								"/>
                    <path className="LogoDNDAColorst844" d="M26.5,8.2c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S26.5,7.8,26.5,8.2z" />
                    <path className="LogoDNDAColorst845" d="M26.3,8.1c0,0.4-0.3,0.7-0.7,0.7S25,8.5,25,8.1c0-0.4,0.3-0.7,0.7-0.7S26.3,7.8,26.3,8.1z" />
                    <path className="LogoDNDAColorst846" d="M26.2,8.1c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7
								C25.9,7.4,26.2,7.7,26.2,8.1z"/>
                    <path className="LogoDNDAColorst847" d="M26,8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6C25.7,7.4,26,7.7,26,8z" />
                    <path className="LogoDNDAColorst848" d="M25.9,8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7C25.6,7.3,25.9,7.6,25.9,8z" />
                    <path className="LogoDNDAColorst849" d="M25.7,7.9c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S25.7,7.6,25.7,7.9z" />
                    <path className="LogoDNDAColorst849" d="M25.6,7.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6C25.3,7.2,25.6,7.5,25.6,7.9z
								"/>
                    <path className="LogoDNDAColorst850" d="M25.4,7.8c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.6,0.7-0.6S25.4,7.5,25.4,7.8z" />
                    <path className="LogoDNDAColorst851" d="M25.3,7.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S25.3,7.4,25.3,7.8z" />
                    <path className="LogoDNDAColorst852" d="M25.1,7.8c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S25.1,7.4,25.1,7.8z" />
                    <path className="LogoDNDAColorst853" d="M24.9,7.7c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S24.9,7.4,24.9,7.7z" />
                    <path className="LogoDNDAColorst853" d="M24.8,7.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C24.5,7,24.8,7.3,24.8,7.7z"/>
                    <path className="LogoDNDAColorst854" d="M24.6,7.6c0,0.4-0.3,0.6-0.7,0.6S23.3,8,23.3,7.6S23.6,7,23.9,7S24.6,7.3,24.6,7.6z" />
                    <path className="LogoDNDAColorst854" d="M24.4,7.6c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7S24.4,7.2,24.4,7.6z" />
                    <path className="LogoDNDAColorst855" d="M24.3,7.5c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S24.3,7.2,24.3,7.5z" />
                    <path className="LogoDNDAColorst855" d="M24.1,7.5c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S24.1,7.1,24.1,7.5z" />
                    <path className="LogoDNDAColorst856" d="M23.9,7.5c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C23.6,6.8,23.9,7.1,23.9,7.5z"/>
                    <path className="LogoDNDAColorst857" d="M23.7,7.4c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6C23.4,6.8,23.7,7.1,23.7,7.4z
								"/>
                    <path className="LogoDNDAColorst857" d="M23.6,7.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6C23.3,6.8,23.6,7,23.6,7.4z" />
                    <path className="LogoDNDAColorst857" d="M23.4,7.4c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S23.4,7,23.4,7.4z" />
                    <path className="LogoDNDAColorst858" d="M23.2,7.3c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6c0-0.4,0.3-0.7,0.7-0.7S23.2,7,23.2,7.3z" />
                    <path className="LogoDNDAColorst859" d="M23,7.3C23,7.7,22.7,8,22.4,8s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S23,7,23,7.3z" />
                    <path className="LogoDNDAColorst860" d="M22.8,7.3c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6C22.5,6.6,22.8,6.9,22.8,7.3z" />
                    <path className="LogoDNDAColorst860" d="M22.6,7.3c0,0.4-0.3,0.6-0.7,0.6c-0.4,0-0.7-0.3-0.7-0.6c0-0.4,0.3-0.6,0.7-0.6S22.6,6.9,22.6,7.3z" />
                    <path className="LogoDNDAColorst861" d="M22.5,7.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S22.5,6.9,22.5,7.2z" />
                    <path className="LogoDNDAColorst862" d="M22.3,7.2c0,0.4-0.3,0.7-0.7,0.7S21,7.6,21,7.2c0-0.4,0.3-0.7,0.7-0.7S22.3,6.8,22.3,7.2z" />
                    <path className="LogoDNDAColorst863" d="M22.1,7.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S22.1,6.8,22.1,7.2z" />
                    <path className="LogoDNDAColorst863" d="M21.9,7.2c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6C21.6,6.5,21.9,6.8,21.9,7.2z" />
                    <path className="LogoDNDAColorst864" d="M21.7,7.1c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S21.7,6.8,21.7,7.1z" />
                    <path className="LogoDNDAColorst865" d="M21.5,7.1c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7C21.2,6.5,21.5,6.8,21.5,7.1z" />
                    <path className="LogoDNDAColorst865" d="M21.3,7.1c0,0.4-0.3,0.6-0.7,0.6S20,7.5,20,7.1s0.3-0.7,0.7-0.7C21,6.5,21.3,6.7,21.3,7.1z" />
                    <path className="LogoDNDAColorst865" d="M21.1,7.1c0,0.4-0.3,0.6-0.7,0.6s-0.7-0.3-0.7-0.6s0.3-0.7,0.7-0.7S21.1,6.7,21.1,7.1z" />
                    <path className="LogoDNDAColorst866" d="M20.9,7.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S20.9,6.7,20.9,7.1z" />
                    <path className="LogoDNDAColorst867" d="M20.7,7.1c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7S20.7,6.7,20.7,7.1z" />
                    <path className="LogoDNDAColorst868" d="M20.5,7.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6S20.5,6.7,20.5,7.1z" />
                    <path className="LogoDNDAColorst868" d="M20.3,7c0,0.4-0.3,0.6-0.7,0.6C19.2,7.7,19,7.4,19,7s0.3-0.7,0.7-0.7C20,6.4,20.3,6.7,20.3,7z" />
                    <path className="LogoDNDAColorst869" d="M20.1,7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.6,0.7-0.6S20.1,6.7,20.1,7z" />
                    <path className="LogoDNDAColorst870" d="M19.8,7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6C19.6,6.4,19.8,6.7,19.8,7z" />
                    <path className="LogoDNDAColorst870" d="M19.6,7c0,0.4-0.3,0.7-0.7,0.7S18.3,7.4,18.3,7c0-0.4,0.3-0.6,0.7-0.6S19.6,6.7,19.6,7z" />
                    <path className="LogoDNDAColorst870" d="M19.4,7c0,0.4-0.3,0.7-0.7,0.7S18.1,7.4,18.1,7s0.3-0.6,0.7-0.6S19.4,6.7,19.4,7z" />
                    <path className="LogoDNDAColorst871" d="M19.2,7c0,0.4-0.3,0.7-0.7,0.7S17.9,7.4,17.9,7s0.3-0.6,0.7-0.6S19.2,6.7,19.2,7z" />
                    <path className="LogoDNDAColorst872" d="M19,7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6C18.7,6.4,19,6.7,19,7z" />
                    <path className="LogoDNDAColorst873" d="M18.8,7c0,0.4-0.3,0.7-0.7,0.7S17.4,7.4,17.4,7s0.3-0.6,0.7-0.6S18.8,6.7,18.8,7z" />
                    <path className="LogoDNDAColorst873" d="M18.5,7c0,0.4-0.3,0.7-0.7,0.7S17.2,7.4,17.2,7s0.3-0.6,0.7-0.6S18.5,6.7,18.5,7z" />
                    <path className="LogoDNDAColorst874" d="M18.3,7c0,0.4-0.3,0.7-0.7,0.7S17,7.4,17,7s0.3-0.7,0.7-0.7C18,6.4,18.3,6.7,18.3,7z" />
                    <path className="LogoDNDAColorst875" d="M18.1,7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
								C17.8,6.4,18.1,6.7,18.1,7z"/>
                    <path className="LogoDNDAColorst876" d="M17.9,7c0,0.4-0.3,0.7-0.7,0.7S16.5,7.4,16.5,7s0.3-0.7,0.7-0.7S17.9,6.7,17.9,7z" />
                    <path className="LogoDNDAColorst877" d="M17.6,7.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.6,0.7-0.6C17.3,6.4,17.6,6.7,17.6,7.1z
								"/>
                  </g>
                </g>
              </g>
              <g>
                <g>
                  <path className="LogoDNDAColorst878" d="M35.6,31.9c-4-2.1-7.4-4.3-9.2-6.4c-1-1.1-1.5-2.2-1.4-3.3c0.1-1.6,4.8,3.1,12.1,4.2
							c-5-3.2-6.9-4.6-6.3-5.4c0.7-0.9,10.8-0.4,10.8,0.3c0.3,11.8-6.2,20.5-21.7,18.9c0,0,4.5-12.8,7.3-13.8"/>
                  <path className="LogoDNDAColorst6" d="M35.9,31.8c-2.5-1.4-5-2.8-7.3-4.6c-1.1-0.9-2.2-1.9-2.9-3.2c-0.3-0.6-0.4-0.8-0.5-1.4
							c0-0.2,0-0.5,0.3-0.4c1.6,0.6,3,1.6,4.5,2.3c2.1,1,4.4,1.7,6.7,2c0.1,0,0.6-0.2,0.5-0.2c-1.6-1-3.3-2-4.8-3.2
							c-0.5-0.4-1.7-1.1-1.4-1.9c0.3-0.6,2.8-0.4,3.3-0.4c1.5,0,3,0.1,4.4,0.2c0.4,0,2,0,2.2,0.5c0.2,0.6,0,4.1-0.2,5.1
							c-0.5,2.9-1.7,5.7-3.5,8c-2.1,2.6-5.2,4-8.4,4.8c-2.1,0.5-4.2,0.6-6.3,0.5c-0.3,0-2.4-0.2-2.4-0.1c0.1-0.2,0.2-0.3,0.3-0.5
							c0.8-2.3,1.8-4.6,2.8-6.8c0.8-1.8,2.1-5.4,4.1-6.2c0.4-0.2-0.2-0.2-0.4-0.1c-2.3,1-3.6,4.7-4.5,6.7c-1.1,2.3-2,4.8-2.9,7.2
							c0,0.1,0.1,0.1,0.1,0.1C25,40.8,31,40.4,35.5,37c4.3-3.3,6.1-8.4,6.4-13.7c0-0.5,0.4-1.9-0.2-2.2c-0.7-0.3-1.5-0.3-2.3-0.4
							c-2.3-0.2-4.6-0.3-6.9-0.1c-0.6,0.1-2.3,0.1-2.1,1.1c0.1,0.7,1.1,1.3,1.6,1.7c1.5,1.2,3.2,2.2,4.8,3.2
							c0.2-0.1,0.3-0.2,0.5-0.2c-3.2-0.5-6.1-1.7-8.9-3.2c-0.9-0.5-2.2-1.5-3.2-1.2c-1.6,0.4,0.8,3.5,1.3,4.1c2.4,2.7,5.9,4.4,9,6.1
							C35.4,32.1,36,31.9,35.9,31.8L35.9,31.8L35.9,31.8z"/>
                </g>
                <path className="LogoDNDAColorst6" d="M23.7,34c0.9,1.9,3.1,3.2,4.7,4.4c0.4,0.3,0.8-0.1,0.3-0.4c-1.4-1.1-3.5-2.2-4.2-3.9
						C24.4,33.8,23.5,33.5,23.7,34L23.7,34L23.7,34z"/>
                <path className="LogoDNDAColorst6" d="M24.4,29.3c2.1,2.5,4.4,4.9,7.3,6.5c1,0.6-0.1-0.7-0.5-0.9c-2.3-1.3-4.1-3.3-5.8-5.4
						C25.1,29.2,23.6,28.3,24.4,29.3L24.4,29.3L24.4,29.3z"/>
                <g>
                  <path className="LogoDNDAColorst878" d="M19.5,40.2c1.7,0,8.5-4.8,8.2-5.7c-0.5-1.5-3.8,1.6-10.6,3c5.3-1.6,11.8-5.7,11-8.1
							c-0.9-1.3-9.1,4.8-14.7,5.3c9.7-2.4,15.5-7.9,13.8-9.2c-1.1-0.8-3.2,2.4-17.2,5.5c6.8-1.7,13.6-4.7,12.8-8.3
							c-0.4-1.6-3.8,3.9-13.1,2.9c6.3-0.8,7.2-3.3,7.3-4.2c0.1-0.5-12.4-0.8-12.4-0.1C4.3,34.1,12.1,40.2,19.5,40.2L19.5,40.2z"/>
                  <path className="LogoDNDAColorst6" d="M19.8,40.3c1.8-0.1,3.6-1.6,5-2.6c0.5-0.4,3.8-2.4,3.5-3.3c-0.4-0.9-1.7-0.5-2.3-0.3
							c-3,1.1-5.8,2.4-9,3.1c0.2,0.1,0.4,0.2,0.6,0.3c3.2-1,6.3-2.5,8.9-4.6c0.5-0.4,3.7-3.6,1.6-4c-1.6-0.3-3.6,1.1-5,1.7
							c-3.1,1.5-6.4,3.3-9.9,3.7c0.2,0.1,0.3,0.2,0.5,0.3c4.4-1.1,8.8-2.9,12.3-5.9c0.7-0.6,3.2-3.2,1.1-3.7
							c-1.2-0.3-2.7,0.8-3.8,1.3c-4.3,2-9,3.2-13.6,4.3c0.2,0.1,0.4,0.2,0.6,0.3c3.6-0.9,7.5-2,10.5-4.2c1.1-0.8,2-1.7,2.4-3
							c0.1-0.5,0.2-1.4-0.3-1.6c-1-0.5-2.2,0.6-3,1.1c-3.2,1.8-6.7,2.4-10.2,2.1c0.1,0.1,0.1,0.2,0.2,0.3c2.4-0.3,5.1-0.8,6.8-2.7
							c0.5-0.6,1.3-1.7,0.2-1.9c-1.6-0.4-3.3-0.3-4.9-0.4c-2.1-0.1-4.3-0.1-6.4,0.1c-0.4,0-0.9,0.1-1.3,0.3c-0.5,0.3,0,3.3,0,3.9
							c0.3,3.2,1.4,6.4,3.3,9.1c2.8,4,7.4,6.3,12.1,6.3c0.6,0,0.2-0.3-0.2-0.3C15,40,11,37.7,8.4,34C6.9,32,6,29.5,5.5,27
							c-0.3-1.3-0.4-2.7-0.5-4c0-1.1-0.4-1.7,0.7-1.8c3.2-0.4,6.5-0.2,9.6,0.1c0.3,0,1.1,0.1,1.1,0.2c-0.1,0.5-0.3,0.9-0.6,1.3
							c-1.4,1.9-4.3,2.4-6.4,2.7c-0.5,0.1,0,0.3,0.2,0.3c4.5,0.4,8.4-0.6,12.3-2.9c0.7-0.4,0.5,0.4,0.5,0.6c-0.1,1.3-1.2,2.3-2.1,3
							c-3,2.4-7,3.4-10.6,4.4c-0.4,0.1,0.4,0.3,0.6,0.3c3.9-0.9,7.7-1.9,11.5-3.3c1.7-0.6,3.2-1.6,4.9-2.2c0.3-0.1,0.2,0,0.1-0.1
							c0.3,0.2,0.2,0.6,0.2,0.9c-0.3,1-1.3,1.9-2,2.5c-3.3,2.9-7.7,4.5-11.8,5.6c-0.4,0.1,0.4,0.3,0.5,0.3c4.7-0.5,8.7-3.3,13-5.1
							c0.9-0.4,1.4-0.5,1.1,0.7c-0.3,1-1.3,1.8-2.1,2.5c-2.5,2.1-5.6,3.5-8.7,4.5c-0.5,0.1,0.4,0.3,0.6,0.3c2.3-0.5,4.4-1.2,6.6-2.1
							c0.7-0.3,1.4-0.6,2.1-0.9c0.3-0.1,1.5-0.6,1,0.2c-0.7,1.2-2.4,2.2-3.5,3c-1.2,0.8-2.9,2.2-4.4,2.3
							C18.7,40.1,19.5,40.4,19.8,40.3L19.8,40.3z"/>
                </g>
              </g>
            </g>
            <g>
              <g>
                <path className="LogoDNDAColorst6" d="M59.6,39.3h-0.5c0-0.4,0-1-0.1-1.7c-0.1-0.7-0.1-1.2-0.1-1.3h0c-0.2,0.6-0.4,1.2-0.7,1.9
						c-0.3,0.7-0.4,1.1-0.4,1.2h-0.4c0-0.1-0.1-0.5-0.4-1.2c-0.3-0.7-0.4-1.1-0.5-1.3c-0.1-0.2-0.1-0.4-0.1-0.5h0
						c0,0.2,0,0.7-0.1,1.5c-0.1,0.7-0.1,1.3-0.1,1.6h-0.5c0,0,0.1-0.5,0.2-1.5c0.1-1,0.2-1.6,0.2-2h0.7c0,0.2,0.1,0.7,0.4,1.4
						c0.3,0.8,0.4,1.2,0.4,1.4h0c0-0.2,0.2-0.6,0.5-1.4c0.3-0.8,0.5-1.3,0.5-1.4h0.7c0,0.4,0,1,0.1,2C59.6,38.7,59.6,39.2,59.6,39.3
						L59.6,39.3z"/>
                <path className="LogoDNDAColorst6" d="M61,39.3h-0.5c0-0.4,0-0.8,0-1.2c0-0.5,0-0.9-0.1-1.3l0.6-0.1c0,0.4,0,0.8,0,1.3
						C60.9,38.5,61,38.9,61,39.3L61,39.3z M61.1,36c0,0.1,0,0.2-0.1,0.2c-0.1,0.1-0.1,0.1-0.3,0.1c-0.1,0-0.2,0-0.2-0.1
						c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0.1-0.2c0.1-0.1,0.2-0.1,0.3-0.1c0.1,0,0.2,0,0.2,0.1C61.1,35.8,61.1,35.9,61.1,36L61.1,36
						z"/>
                <path className="LogoDNDAColorst6" d="M64.1,39.3h-0.5c0-0.5,0.1-1,0.1-1.5c0-0.3-0.1-0.5-0.2-0.6C63.4,37.1,63.2,37,63,37
						c-0.3,0-0.5,0.1-0.7,0.3c0,0.6,0,1.2,0,1.9h-0.5c0-0.6,0-1,0-1.3c0-0.4,0-0.8-0.1-1.2l0.5-0.1l0,0.3h0c0.3-0.2,0.6-0.4,0.9-0.4
						c0.3,0,0.5,0.1,0.7,0.2c0.2,0.1,0.2,0.4,0.2,0.7c0,0,0,0.1,0,0.2v0.2C64.1,38.2,64.1,38.7,64.1,39.3L64.1,39.3z"/>
                <path className="LogoDNDAColorst6" d="M65.3,39.3h-0.5c0-0.4,0-0.8,0-1.2c0-0.5,0-0.9-0.1-1.3l0.6-0.1c0,0.4,0,0.8,0,1.3
						C65.3,38.5,65.3,38.9,65.3,39.3L65.3,39.3z M65.5,36c0,0.1,0,0.2-0.1,0.2c-0.1,0.1-0.1,0.1-0.3,0.1c-0.1,0-0.2,0-0.2-0.1
						c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0.1-0.2c0.1-0.1,0.2-0.1,0.3-0.1c0.1,0,0.2,0,0.2,0.1C65.4,35.8,65.5,35.9,65.5,36L65.5,36
						z"/>
                <path className="LogoDNDAColorst6" d="M67.9,38.5c0,0.5-0.4,0.8-1,0.8c-0.3,0-0.6,0-0.9-0.1l0.1-0.4c0.2,0.1,0.5,0.1,0.8,0.1
						c0.4,0,0.6-0.1,0.6-0.3c0-0.1,0-0.2-0.1-0.2c-0.1-0.1-0.2-0.1-0.5-0.2c-0.3-0.1-0.4-0.2-0.6-0.3c-0.2-0.1-0.3-0.3-0.3-0.5
						c0-0.2,0.1-0.4,0.2-0.5c0.2-0.1,0.4-0.2,0.7-0.2s0.6,0,0.8,0.1l-0.1,0.4C67.5,37,67.3,37,67,37c-0.4,0-0.5,0.1-0.5,0.3
						c0,0.1,0,0.2,0.1,0.2c0.1,0.1,0.2,0.1,0.5,0.2c0.2,0.1,0.4,0.2,0.5,0.3C67.8,38.2,67.9,38.3,67.9,38.5L67.9,38.5z"/>
                <path className="LogoDNDAColorst6" d="M70,38.9l0,0.3c-0.1,0-0.3,0.1-0.4,0.1c-0.3,0-0.6-0.1-0.7-0.2c-0.1-0.2-0.2-0.4-0.2-0.9
						c0-0.3,0-0.6,0-1.1c-0.1,0-0.3,0-0.5,0l0-0.4c0.2,0,0.3,0,0.5,0c0-0.1,0-0.4,0-0.8l0.4,0c0,0.4,0,0.6,0,0.8c0.2,0,0.5,0,0.8,0
						l0,0.4c-0.3,0-0.6,0-0.8,0c0,0.3,0,0.6,0,0.9c0,0.4,0,0.6,0.1,0.7c0.1,0.1,0.2,0.2,0.4,0.2C69.8,38.9,69.9,38.9,70,38.9
						L70,38.9z"/>
                <path className="LogoDNDAColorst6" d="M72.8,37.7c0,0.1,0,0.2,0,0.3l-1.9,0c0,0.3,0.1,0.5,0.3,0.6c0.2,0.2,0.4,0.3,0.8,0.3c0.3,0,0.5,0,0.8-0.1
						l0,0.4c-0.2,0.1-0.4,0.1-0.8,0.1c-0.5,0-0.8-0.1-1.1-0.4c-0.2-0.2-0.4-0.6-0.4-0.9c0-0.4,0.1-0.7,0.3-1
						c0.2-0.3,0.5-0.4,0.9-0.4c0.4,0,0.6,0.1,0.8,0.3C72.7,37.1,72.8,37.4,72.8,37.7L72.8,37.7z M72.4,37.7c0-0.5-0.2-0.7-0.6-0.7
						s-0.7,0.3-0.8,0.8L72.4,37.7L72.4,37.7z"/>
                <path className="LogoDNDAColorst6" d="M75.2,36.7l-0.1,0.4c-0.1-0.1-0.3-0.1-0.4-0.1c-0.3,0-0.6,0.1-0.7,0.5c0,0.8,0,1.4,0,1.7h-0.5
						c0-0.6,0-1,0-1.3c0-0.4,0-0.8-0.1-1.2l0.5-0.1c0,0.2,0.1,0.3,0.1,0.4h0c0.2-0.3,0.4-0.4,0.7-0.4C74.8,36.7,75,36.7,75.2,36.7
						L75.2,36.7z"/>
                <path className="LogoDNDAColorst6" d="M76,39.3h-0.5c0-0.4,0-0.8,0-1.2c0-0.5,0-0.9-0.1-1.3l0.6-0.1c0,0.4,0,0.8,0,1.3C76,38.5,76,38.9,76,39.3
						L76,39.3z M76.2,36c0,0.1,0,0.2-0.1,0.2c-0.1,0.1-0.2,0.1-0.3,0.1c-0.1,0-0.2,0-0.2-0.1c-0.1-0.1-0.1-0.1-0.1-0.2
						c0-0.1,0-0.2,0.1-0.2c0.1-0.1,0.2-0.1,0.3-0.1c0.1,0,0.2,0,0.2,0.1C76.1,35.8,76.2,35.9,76.2,36L76.2,36z"/>
                <path className="LogoDNDAColorst6" d="M79.3,37.9c0,0.4-0.1,0.8-0.4,1c-0.3,0.2-0.6,0.4-1,0.4s-0.6-0.1-0.9-0.3c-0.2-0.2-0.4-0.5-0.4-0.9
						c0-0.4,0.1-0.8,0.4-1.1c0.3-0.2,0.6-0.4,1-0.4c0.3,0,0.6,0.1,0.9,0.3C79.2,37.2,79.3,37.5,79.3,37.9L79.3,37.9z M78.9,38
						c0-0.3-0.1-0.5-0.2-0.7C78.5,37.1,78.3,37,78,37s-0.5,0.1-0.6,0.3c-0.1,0.2-0.2,0.4-0.2,0.7c0,0.3,0.1,0.5,0.2,0.7
						c0.1,0.2,0.4,0.3,0.6,0.3c0.3,0,0.5-0.1,0.6-0.3C78.8,38.5,78.9,38.3,78.9,38L78.9,38z"/>
                <path className="LogoDNDAColorst6" d="M83.6,39.2l-0.4,0c0-0.1,0-0.2,0-0.2h0c-0.2,0.2-0.5,0.3-0.9,0.3c-0.3,0-0.6-0.1-0.8-0.4
						c-0.2-0.2-0.3-0.5-0.3-0.9c0-0.4,0.1-0.7,0.3-1c0.2-0.3,0.6-0.4,1-0.4c0.3,0,0.5,0.1,0.6,0.2h0c0-0.4,0-0.9,0-1.3l0.5,0
						c0,0.4-0.1,1-0.1,1.8S83.6,38.7,83.6,39.2L83.6,39.2z M83.2,38.7c0-0.5,0-1.1,0-1.6C83,37,82.8,37,82.6,37
						c-0.3,0-0.5,0.1-0.7,0.3c-0.2,0.2-0.2,0.4-0.2,0.7c0,0.3,0.1,0.5,0.2,0.7c0.1,0.2,0.3,0.3,0.6,0.3C82.8,39,83,38.9,83.2,38.7
						L83.2,38.7z"/>
                <path className="LogoDNDAColorst6" d="M86.7,37.7c0,0.1,0,0.2,0,0.3l-1.9,0c0,0.3,0.1,0.5,0.3,0.6c0.2,0.2,0.4,0.3,0.8,0.3c0.3,0,0.5,0,0.8-0.1
						l0,0.4c-0.2,0.1-0.4,0.1-0.8,0.1c-0.5,0-0.8-0.1-1.1-0.4c-0.3-0.2-0.4-0.6-0.4-0.9c0-0.4,0.1-0.7,0.3-1
						c0.2-0.3,0.5-0.4,0.9-0.4c0.4,0,0.6,0.1,0.8,0.3C86.6,37.1,86.7,37.4,86.7,37.7L86.7,37.7z M86.2,37.7c0-0.5-0.2-0.7-0.7-0.7
						c-0.4,0-0.7,0.3-0.8,0.8L86.2,37.7L86.2,37.7z"/>
                <path className="LogoDNDAColorst6" d="M87.9,39.3h-0.5c0-0.6,0-1.2,0-2c0-0.7,0-1.3-0.1-1.7l0.6,0c0,0.5-0.1,1.1-0.1,1.8
						C87.8,38,87.8,38.7,87.9,39.3L87.9,39.3z"/>
                <path className="LogoDNDAColorst6" d="M90.6,39.3h-0.5c0-0.6,0-1.2,0-1.8s0-1.2,0-1.6h0.5c0,0.5,0,1,0,1.6C90.6,38.1,90.6,38.7,90.6,39.3z" />
                <path className="LogoDNDAColorst6" d="M93.9,39.3h-0.5c0-0.5,0.1-1,0.1-1.5c0-0.3-0.1-0.5-0.2-0.6C93.1,37.1,93,37,92.8,37
						c-0.3,0-0.5,0.1-0.7,0.3c0,0.6,0,1.2,0,1.9h-0.5c0-0.6,0-1,0-1.3c0-0.4,0-0.8-0.1-1.2l0.5-0.1L92,37h0c0.3-0.2,0.6-0.4,0.9-0.4
						c0.3,0,0.5,0.1,0.7,0.2c0.2,0.1,0.2,0.4,0.2,0.7c0,0,0,0.1,0,0.2c0,0.1,0,0.2,0,0.2C93.8,38.2,93.8,38.7,93.9,39.3L93.9,39.3z"
                />
                <path className="LogoDNDAColorst6" d="M96.1,38.9l0,0.3c-0.2,0-0.3,0.1-0.4,0.1c-0.3,0-0.6-0.1-0.7-0.2c-0.1-0.2-0.2-0.4-0.2-0.9
						c0-0.3,0-0.6,0-1.1c-0.1,0-0.3,0-0.5,0l0-0.4c0.2,0,0.3,0,0.5,0c0-0.1,0-0.4,0-0.8l0.4,0c0,0.4,0,0.6,0,0.8c0.2,0,0.4,0,0.8,0
						l0,0.4c-0.3,0-0.6,0-0.8,0c0,0.3,0,0.6,0,0.9c0,0.4,0,0.6,0.1,0.7c0.1,0.1,0.2,0.2,0.4,0.2C95.9,38.9,96,38.9,96.1,38.9
						L96.1,38.9z"/>
                <path className="LogoDNDAColorst6" d="M99,37.7c0,0.1,0,0.2,0,0.3L97,38c0,0.3,0.1,0.5,0.3,0.6c0.2,0.2,0.4,0.3,0.8,0.3c0.3,0,0.5,0,0.8-0.1
						l0,0.4c-0.2,0.1-0.4,0.1-0.8,0.1c-0.5,0-0.8-0.1-1.1-0.4c-0.3-0.2-0.4-0.6-0.4-0.9c0-0.4,0.1-0.7,0.3-1
						c0.2-0.3,0.5-0.4,0.9-0.4c0.4,0,0.6,0.1,0.8,0.3C98.9,37.1,99,37.4,99,37.7L99,37.7z M98.5,37.7c0-0.5-0.2-0.7-0.7-0.7
						s-0.7,0.3-0.8,0.8L98.5,37.7L98.5,37.7z"/>
                <path className="LogoDNDAColorst6" d="M101.3,36.7l-0.1,0.4c-0.1-0.1-0.3-0.1-0.4-0.1c-0.3,0-0.6,0.1-0.7,0.5c0,0.8,0,1.4,0,1.7h-0.5
						c0-0.6,0-1,0-1.3c0-0.4,0-0.8-0.1-1.2l0.5-0.1c0,0.2,0,0.3,0,0.4h0c0.2-0.3,0.4-0.4,0.7-0.4C100.9,36.7,101.1,36.7,101.3,36.7
						L101.3,36.7z"/>
                <path className="LogoDNDAColorst6" d="M102.1,39.3h-0.5c0-0.4,0-0.8,0-1.2c0-0.5,0-0.9-0.1-1.3l0.6-0.1c0,0.4,0,0.8,0,1.3
						C102.1,38.5,102.1,38.9,102.1,39.3L102.1,39.3z M102.3,36c0,0.1,0,0.2-0.1,0.2c-0.1,0.1-0.1,0.1-0.3,0.1c-0.1,0-0.2,0-0.2-0.1
						c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0-0.2,0.1-0.2c0.1-0.1,0.2-0.1,0.3-0.1c0.1,0,0.2,0,0.2,0.1C102.2,35.8,102.3,35.9,102.3,36
						L102.3,36z"/>
                <path className="LogoDNDAColorst6" d="M105.4,37.9c0,0.4-0.1,0.8-0.4,1c-0.3,0.3-0.6,0.4-1,0.4c-0.3,0-0.6-0.1-0.9-0.3c-0.2-0.2-0.4-0.5-0.4-0.9
						c0-0.4,0.1-0.8,0.4-1.1c0.3-0.2,0.6-0.4,1-0.4c0.3,0,0.6,0.1,0.9,0.3C105.3,37.2,105.4,37.5,105.4,37.9L105.4,37.9z M105,38
						c0-0.3-0.1-0.5-0.2-0.7c-0.1-0.2-0.3-0.3-0.6-0.3c-0.3,0-0.5,0.1-0.6,0.3c-0.1,0.2-0.2,0.4-0.2,0.7c0,0.3,0.1,0.5,0.2,0.7
						c0.1,0.2,0.4,0.3,0.6,0.3c0.3,0,0.5-0.1,0.6-0.3C104.9,38.5,105,38.3,105,38L105,38z"/>
                <path className="LogoDNDAColorst6" d="M107.8,36.7l-0.1,0.4c-0.1-0.1-0.3-0.1-0.4-0.1c-0.3,0-0.6,0.1-0.7,0.5c0,0.8,0,1.4,0,1.7h-0.5
						c0-0.6,0-1,0-1.3c0-0.4,0-0.8-0.1-1.2l0.5-0.1c0,0.2,0.1,0.3,0.1,0.4h0c0.2-0.3,0.4-0.4,0.7-0.4
						C107.4,36.7,107.6,36.7,107.8,36.7L107.8,36.7z"/>
              </g>
              <rect x="55.3" y="34.4" className="LogoDNDAColorst6" width="52.4" height="0.1" />
            </g>
            <g>
              <path className="LogoDNDAColorst6" d="M58.7,23.5c-0.4-0.4-1-0.5-1.8-0.5c-0.4,0-0.8,0-1.2,0.1l0,0v4.2h0c0.3,0,0.6,0.1,1,0.1
					c0.9,0,1.5-0.2,1.9-0.6c0.4-0.4,0.6-1,0.6-1.7C59.3,24.4,59.1,23.9,58.7,23.5L58.7,23.5z M58.7,25.1c0,1.1-0.6,1.8-1.8,1.8
					c-0.2,0-0.4,0-0.5,0v-3.3c0.1,0,0.3,0,0.6,0c0.6,0,1,0.1,1.3,0.4C58.6,24.2,58.7,24.6,58.7,25.1L58.7,25.1z"/>
              <rect x="60.1" y="24.2" className="LogoDNDAColorst6" width="0.6" height="3.1" />
              <path className="LogoDNDAColorst6" d="M60.5,23.8c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.3c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4
					C60.1,23.6,60.2,23.8,60.5,23.8L60.5,23.8z"/>
              <path className="LogoDNDAColorst6" d="M63.2,24.1c-0.4,0-0.7,0.2-0.9,0.6l0-0.5h-0.6v0c0,0.3,0,0.6,0,0.9v2.1h0.6v-1.6c0-0.1,0-0.2,0-0.3
					c0.1-0.4,0.4-0.7,0.7-0.7c0.1,0,0.1,0,0.2,0l0,0v-0.6l0,0C63.3,24.1,63.3,24.1,63.2,24.1L63.2,24.1z"/>
              <path className="LogoDNDAColorst6" d="M65.3,27.4c0.5,0,0.8-0.1,1-0.2l0,0l-0.1-0.5l0,0c-0.2,0.1-0.4,0.2-0.8,0.2c-0.6,0-1-0.4-1-1h2.2l0-0.1
					c0-0.1,0-0.1,0-0.2c0-0.7-0.3-1.5-1.3-1.5c-0.9,0-1.5,0.7-1.5,1.7C63.8,26.8,64.4,27.4,65.3,27.4L65.3,27.4z M64.4,25.4
					c0-0.3,0.3-0.8,0.8-0.8c0.2,0,0.4,0.1,0.5,0.2c0.2,0.2,0.2,0.5,0.2,0.6H64.4z"/>
              <path className="LogoDNDAColorst6" d="M68.7,27.4c0.4,0,0.7-0.1,0.9-0.2l0,0l-0.1-0.5l0,0c-0.2,0.1-0.4,0.1-0.7,0.1c-0.6,0-1-0.4-1-1.1
					c0-0.7,0.4-1.1,1.1-1.1c0.3,0,0.5,0.1,0.6,0.1l0,0l0.1-0.5l0,0c-0.2-0.1-0.4-0.2-0.8-0.2c-1,0-1.7,0.7-1.7,1.6
					S67.8,27.4,68.7,27.4L68.7,27.4z"/>
              <path className="LogoDNDAColorst6" d="M72.6,27.2L72.6,27.2l-0.1-0.5l0,0c-0.2,0.1-0.4,0.1-0.7,0.1c-0.6,0-1-0.4-1-1.1s0.4-1.1,1.1-1.1
					c0.3,0,0.5,0.1,0.6,0.1l0,0l0.1-0.5l0,0c-0.2-0.1-0.4-0.2-0.8-0.2c-1,0-1.7,0.7-1.7,1.6c0,1,0.6,1.6,1.6,1.6
					C72.1,27.4,72.4,27.3,72.6,27.2L72.6,27.2z"/>
              <path className="LogoDNDAColorst6" d="M73.7,23.8c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.3c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4
					C73.3,23.6,73.5,23.8,73.7,23.8L73.7,23.8z"/>
              <rect x="73.4" y="24.2" className="LogoDNDAColorst6" width="0.6" height="3.1" />
              <polygon className="LogoDNDAColorst6" points="77.3,22.9 76.6,22.9 76,23.9 76.4,23.9 				" />
              <path className="LogoDNDAColorst6" d="M76.4,24.1c-0.9,0-1.6,0.7-1.6,1.6c0,1,0.6,1.6,1.5,1.6c0.8,0,1.6-0.5,1.6-1.6
					C77.9,24.8,77.3,24.1,76.4,24.1L76.4,24.1z M77.3,25.7c0,0.7-0.4,1.1-0.9,1.1c-0.5,0-0.9-0.5-0.9-1.1c0-0.6,0.3-1.1,0.9-1.1
					S77.3,25.2,77.3,25.7z"/>
              <path className="LogoDNDAColorst6" d="M78.7,25.1v2.2h0.6v-1.9c0-0.1,0-0.2,0-0.2c0.1-0.3,0.3-0.5,0.7-0.5c0.6,0,0.7,0.5,0.7,0.9v1.8h0.6v-1.8
					c0-1.3-0.9-1.3-1.1-1.3c-0.5,0-0.8,0.3-1,0.5l0-0.4h-0.6v0C78.7,24.5,78.7,24.7,78.7,25.1L78.7,25.1z"/>
              <path className="LogoDNDAColorst6" d="M86.6,27.3L86.6,27.3l0.6,0V23h-0.6v1.8c0,0.6,0,1.1,0.1,1.6c-0.2-0.4-0.4-0.8-0.7-1.2L84.6,23l0,0H84v4.3
					h0.6v-1.8c0-0.7,0-1.1,0-1.6c0.2,0.4,0.4,0.8,0.8,1.3L86.6,27.3L86.6,27.3z"/>
              <path className="LogoDNDAColorst6" d="M90,27.3h0.6l0,0c0-0.2,0-0.4,0-0.7v-1.1c0-0.6-0.2-1.3-1.2-1.3c-0.4,0-0.8,0.1-1,0.3l0,0l0.2,0.4l0,0
					c0.2-0.1,0.5-0.2,0.8-0.2c0.4,0,0.7,0.2,0.7,0.7v0c-0.7,0-1.3,0.2-1.6,0.5c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.4,0.3,0.9,1,0.9
					c0.4,0,0.7-0.2,0.9-0.4L90,27.3L90,27.3z M88.9,26c0.2-0.2,0.5-0.3,1-0.3c0,0,0,0,0.1,0v0.5c0,0,0,0.1,0,0.2
					c-0.1,0.2-0.3,0.5-0.7,0.5c-0.2,0-0.5-0.1-0.5-0.5C88.7,26.2,88.8,26.1,88.9,26L88.9,26z"/>
              <path className="LogoDNDAColorst6" d="M93.8,27.2l-0.1-0.5l0,0c-0.2,0.1-0.4,0.1-0.7,0.1c-0.6,0-1-0.4-1-1.1s0.4-1.1,1.1-1.1
					c0.3,0,0.5,0.1,0.6,0.1l0,0l0.1-0.5l0,0c-0.2-0.1-0.4-0.2-0.8-0.2c-1,0-1.7,0.7-1.7,1.6s0.6,1.6,1.6,1.6
					C93.3,27.4,93.7,27.3,93.8,27.2L93.8,27.2L93.8,27.2z"/>
              <rect x="94.6" y="24.2" className="LogoDNDAColorst6" width="0.6" height="3.1" />
              <path className="LogoDNDAColorst6" d="M94.9,23.8c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.3c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4
					C94.5,23.6,94.7,23.8,94.9,23.8L94.9,23.8z"/>
              <path className="LogoDNDAColorst6" d="M97.5,27.4c0.8,0,1.6-0.5,1.6-1.6c0-1-0.6-1.6-1.5-1.6S96,24.8,96,25.8C96,26.8,96.6,27.4,97.5,27.4
					L97.5,27.4z M96.7,25.8c0-0.6,0.3-1.1,0.9-1.1s0.9,0.6,0.9,1.1c0,0.7-0.4,1.1-0.9,1.1C97,26.9,96.7,26.4,96.7,25.8z"/>
              <path className="LogoDNDAColorst6" d="M101.3,24.7c0.6,0,0.7,0.5,0.7,0.9v1.8h0.6v-1.8c0-1.3-0.9-1.3-1.1-1.3c-0.5,0-0.8,0.3-1,0.5l0-0.4h-0.6v0
					c0,0.2,0,0.5,0,0.8v2.2h0.6v-1.9c0-0.1,0-0.2,0-0.2C100.7,24.9,100.9,24.7,101.3,24.7L101.3,24.7z"/>
              <path className="LogoDNDAColorst6" d="M105.9,26.5v-1.1c0-0.6-0.2-1.3-1.2-1.3c-0.4,0-0.8,0.1-1,0.3l0,0l0.2,0.4l0,0c0.2-0.1,0.5-0.2,0.8-0.2
					c0.4,0,0.7,0.2,0.7,0.7v0c-0.7,0-1.3,0.2-1.6,0.5c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.4,0.3,0.9,1,0.9c0.4,0,0.7-0.2,0.9-0.4l0,0.4
					h0.6l0,0C105.9,27.1,105.9,26.8,105.9,26.5L105.9,26.5z M104.2,26c0.2-0.2,0.5-0.3,1-0.3c0,0,0,0,0.1,0v0.5c0,0,0,0.1,0,0.2
					c-0.1,0.2-0.3,0.5-0.7,0.5c-0.2,0-0.5-0.1-0.5-0.5C104,26.2,104.1,26.1,104.2,26L104.2,26z"/>
              <rect x="106.9" y="22.8" className="LogoDNDAColorst6" width="0.6" height="4.5" />
              <path className="LogoDNDAColorst6" d="M58.5,31.9v-3.7h-0.6V30c-0.2-0.3-0.5-0.4-0.9-0.4c-0.4,0-0.7,0.1-0.9,0.4c-0.3,0.3-0.5,0.8-0.5,1.3
					c0,0.9,0.6,1.6,1.4,1.6c0.4,0,0.8-0.2,1-0.5l0,0.5h0.6v0C58.5,32.5,58.5,32.1,58.5,31.9L58.5,31.9z M57.8,30.9v0.5
					c0,0.1,0,0.2,0,0.2c-0.1,0.4-0.4,0.6-0.8,0.6c-0.5,0-0.9-0.4-0.9-1.1c0-0.7,0.4-1.1,0.9-1.1c0.4,0,0.7,0.3,0.8,0.6
					C57.8,30.7,57.8,30.8,57.8,30.9z"/>
              <path className="LogoDNDAColorst6" d="M60.4,29.6c-0.9,0-1.5,0.7-1.5,1.7s0.6,1.6,1.6,1.6c0.5,0,0.8-0.1,1-0.2l0,0l-0.1-0.5l0,0
					c-0.2,0.1-0.4,0.2-0.8,0.2c-0.6,0-1-0.4-1-1h2.2l0-0.1c0-0.1,0-0.1,0-0.2C61.8,30.4,61.4,29.6,60.4,29.6L60.4,29.6z M59.6,30.9
					c0-0.3,0.3-0.8,0.8-0.8c0.2,0,0.4,0.1,0.5,0.2c0.2,0.2,0.2,0.5,0.2,0.6H59.6z"/>
              <path className="LogoDNDAColorst6" d="M64.7,28.4c-0.4,0-0.8,0-1.2,0.1l0,0v4.2h0c0.3,0,0.6,0.1,1,0.1c0.9,0,1.5-0.2,1.9-0.6
					c0.4-0.4,0.6-1,0.6-1.7c0-0.7-0.2-1.2-0.6-1.5C66,28.6,65.5,28.4,64.7,28.4L64.7,28.4z M66.4,30.5c0,1.1-0.6,1.8-1.8,1.8
					c-0.2,0-0.4,0-0.5,0V29c0.1,0,0.3,0,0.6,0c0.6,0,1,0.1,1.3,0.4C66.3,29.6,66.4,30,66.4,30.5L66.4,30.5z"/>
              <path className="LogoDNDAColorst6" d="M68.8,29.6c-0.9,0-1.5,0.7-1.5,1.7s0.6,1.6,1.6,1.6c0.5,0,0.8-0.1,1-0.2l0,0l-0.1-0.5l0,0
					c-0.2,0.1-0.4,0.2-0.8,0.2c-0.6,0-1-0.4-1-1h2.2l0-0.1c0-0.1,0-0.1,0-0.2C70.1,30.4,69.8,29.6,68.8,29.6L68.8,29.6z M67.9,30.9
					c0-0.3,0.3-0.8,0.8-0.8c0.2,0,0.4,0.1,0.5,0.2c0.2,0.2,0.2,0.5,0.2,0.6H67.9L67.9,30.9z"/>
              <path className="LogoDNDAColorst6" d="M72,29.6c-0.4,0-0.7,0.2-0.9,0.6l0-0.5h-0.6v0c0,0.3,0,0.6,0,0.9v2.1h0.6v-1.6c0-0.1,0-0.2,0-0.3
					c0.1-0.4,0.4-0.7,0.7-0.7c0.1,0,0.1,0,0.2,0l0,0v-0.6l0,0C72.1,29.6,72.1,29.6,72,29.6L72,29.6z"/>
              <path className="LogoDNDAColorst6" d="M73.7,29.6c-0.9,0-1.5,0.7-1.5,1.7s0.6,1.6,1.6,1.6c0.5,0,0.8-0.1,1-0.2l0,0l-0.1-0.5l0,0
					c-0.2,0.1-0.4,0.2-0.8,0.2c-0.6,0-1-0.4-1-1H75l0-0.1c0-0.1,0-0.1,0-0.2C75,30.4,74.7,29.6,73.7,29.6L73.7,29.6z M72.9,30.9
					c0-0.3,0.3-0.8,0.8-0.8c0.2,0,0.4,0.1,0.5,0.2c0.2,0.2,0.2,0.5,0.2,0.6H72.9L72.9,30.9z"/>
              <path className="LogoDNDAColorst6" d="M77,30.1c0.3,0,0.5,0.1,0.6,0.1l0,0l0.1-0.5l0,0c-0.2-0.1-0.4-0.2-0.8-0.2c-1,0-1.7,0.7-1.7,1.6
					s0.6,1.6,1.6,1.6c0.4,0,0.7-0.1,0.9-0.2l0,0l-0.1-0.5l0,0c-0.2,0.1-0.4,0.1-0.7,0.1c-0.6,0-1-0.4-1-1.1S76.3,30.1,77,30.1
					L77,30.1z"/>
              <path className="LogoDNDAColorst6" d="M79.8,29.6c-0.2,0-0.4,0.1-0.6,0.2c-0.1,0.1-0.3,0.2-0.4,0.3v-1.8h-0.6v4.5h0.6v-1.9c0-0.1,0-0.2,0-0.3
					c0.1-0.3,0.3-0.5,0.7-0.5c0.6,0,0.7,0.5,0.7,0.9v1.8h0.6v-1.8C80.9,29.9,80.3,29.6,79.8,29.6L79.8,29.6z"/>
              <path className="LogoDNDAColorst6" d="M83,29.6c-0.9,0-1.6,0.7-1.6,1.6s0.6,1.6,1.5,1.6c0.8,0,1.6-0.5,1.6-1.6C84.5,30.2,83.9,29.6,83,29.6
					L83,29.6z M82.9,32.3c-0.5,0-0.9-0.5-0.9-1.1c0-0.6,0.3-1.1,0.9-1.1s0.9,0.6,0.9,1.1C83.8,31.9,83.5,32.3,82.9,32.3z"/>
              <path className="LogoDNDAColorst6" d="M88.9,31.9v-3.7h-0.6V30c-0.2-0.3-0.5-0.4-0.9-0.4c-0.4,0-0.7,0.1-0.9,0.4c-0.3,0.3-0.5,0.8-0.5,1.3
					c0,0.9,0.6,1.6,1.4,1.6c0.4,0,0.8-0.2,1-0.5l0,0.5h0.6v0C88.9,32.5,88.9,32.1,88.9,31.9L88.9,31.9z M88.3,30.9v0.5
					c0,0.1,0,0.2,0,0.2c-0.1,0.4-0.4,0.6-0.8,0.6c-0.5,0-0.9-0.4-0.9-1.1c0-0.7,0.4-1.1,0.9-1.1c0.4,0,0.7,0.3,0.8,0.6
					C88.3,30.7,88.3,30.8,88.3,30.9z"/>
              <path className="LogoDNDAColorst6" d="M90.9,29.6c-0.9,0-1.5,0.7-1.5,1.7s0.6,1.6,1.6,1.6c0.5,0,0.8-0.1,1-0.2l0,0l-0.1-0.5l0,0
					c-0.2,0.1-0.4,0.2-0.8,0.2c-0.6,0-1-0.4-1-1h2.2l0-0.1c0-0.1,0-0.1,0-0.2C92.2,30.4,91.8,29.6,90.9,29.6L90.9,29.6z M90,30.9
					c0-0.3,0.3-0.8,0.8-0.8c0.2,0,0.4,0.1,0.5,0.2c0.2,0.2,0.2,0.5,0.2,0.6H90z"/>
              <path className="LogoDNDAColorst6" d="M95.7,28.5H95l-1.5,4.2l0,0h0.6l0.4-1.3h1.5l0.5,1.3l0,0h0.7L95.7,28.5L95.7,28.5L95.7,28.5z M95.4,29.1
					c0.1,0.2,0.1,0.4,0.2,0.7l0.4,1.2h-1.2l0.4-1.2C95.2,29.6,95.3,29.3,95.4,29.1L95.4,29.1z"/>
              <path className="LogoDNDAColorst6" d="M100.2,31.9v-2.2h-0.6v1.9c0,0.1,0,0.2,0,0.3c-0.1,0.2-0.3,0.5-0.7,0.5c-0.4,0-0.7-0.3-0.7-0.9v-1.7h-0.6
					v1.8c0,1.2,0.8,1.4,1.1,1.4c0.6,0,0.9-0.3,1-0.5l0,0.4h0.6v0C100.2,32.5,100.2,32.2,100.2,31.9L100.2,31.9z"/>
              <path className="LogoDNDAColorst6" d="M101.7,28.8l-0.6,0.2v0.7h-0.5v0.5h0.5v1.6c0,0.4,0.1,0.7,0.2,0.8c0.1,0.2,0.4,0.2,0.6,0.2
					c0.2,0,0.4,0,0.5-0.1l0,0l0-0.5l0,0c-0.1,0-0.2,0-0.3,0c-0.3,0-0.4-0.2-0.4-0.6v-1.6h0.8v-0.5h-0.8L101.7,28.8L101.7,28.8z"/>
              <path className="LogoDNDAColorst6" d="M104.2,29.6c-0.9,0-1.6,0.7-1.6,1.6s0.6,1.6,1.5,1.6c0.8,0,1.6-0.5,1.6-1.6
					C105.7,30.2,105.1,29.6,104.2,29.6L104.2,29.6z M104.2,30.1c0.6,0,0.9,0.6,0.9,1.1c0,0.7-0.4,1.1-0.9,1.1
					c-0.5,0-0.9-0.5-0.9-1.1C103.2,30.6,103.5,30.1,104.2,30.1z"/>
              <path className="LogoDNDAColorst6" d="M107.8,29.6c-0.1,0-0.1,0-0.2,0c-0.4,0-0.7,0.2-0.9,0.6l0-0.5h-0.6v0c0,0.3,0,0.6,0,0.9v2.1h0.6v-1.6
					c0-0.1,0-0.2,0-0.3c0.1-0.4,0.4-0.7,0.7-0.7c0.1,0,0.1,0,0.2,0l0,0L107.8,29.6L107.8,29.6L107.8,29.6z"/>
            </g>
          </g>
        </g>
      </g>
    </svg>

  );
}

export default IconDNDAColor
